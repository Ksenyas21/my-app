import {useState} from "react";
import {Candidate, USERS} from "@/utils/users";

const Search = () => {
    const [search, setSearch] = useState('');
    const[usersFiltered, setUserFiltered] = useState<any[] | null>([]);
    const [candidates, setCandidates] = useState<any[] | null>([]);
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);
        const getData = (e: any ) => {
            const search = e.target.value;
            setSearch(search);
            const test = USERS.filter((candidate) => {
                const fullName = `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
                return fullName.includes(search.toLowerCase());
            });

            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }

            const filteredCandidates = test.filter((user) => !candidates?.includes(user));
            setTypingTimeout(setTimeout(() => {
                console.log('Searching for:', search);
                setUserFiltered(filteredCandidates);
            }, 150)); // Delay in milliseconds

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    setUserFiltered(test);
                }, 250);
            });
        }


    return (
        <div>
            <input type="text" placeholder="Search" className="border text-gray-900 border-gray-500 w-full min-w-40 h-7 rounded" value={search} onChange={getData}/>
                {usersFiltered?.map((user: any, index: number) => (
                    <li key={index}>{`${user.firstName} ${user.lastName}`}</li>
                ))}
        </div>
    );
}
export default Search;
