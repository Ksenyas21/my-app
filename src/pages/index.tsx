import { Inter } from "next/font/google";
import Search from "@/components/search";
import Header from "@/components/Header";
import PostCard from "@/components/post-card";
import {useEffect, useState} from "react";
import {Candidate} from "@/types/candidate";
import useDebouncedValue from "@/hooks/UseDebouncedValue";
import {USERS} from "@/utils/users";

const inter = Inter({ subsets: ["latin"] });

function getData(searchQuery: string): Promise<Candidate[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredCandidates = USERS.filter((candidate) => {
                const fullName = `${candidate.firstName} ${candidate.lastName}`.toLowerCase();
                return fullName.includes(searchQuery.toLowerCase());
            });
            resolve( filteredCandidates);
        }, 250);
    });
}

export default function Home() {
    const [search, setSearch] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Candidate[]>([]);
    const [selectedCandidates, setSelectedCandidates] = useState<Candidate[]>([]);
    const debouncedInputValue = useDebouncedValue<string>(search, 150);


    useEffect(() => {
        if(debouncedInputValue !== ''){
            getData(debouncedInputValue).then((data) => {
                const dataFiltered = data.filter((candidate) => !selectedCandidates.includes(candidate));
                setSuggestions(dataFiltered);
            });
        }
        else if (debouncedInputValue === '') {
            setSuggestions([]);
        }
    },[debouncedInputValue]);
    const handleSelectCandidate = (candidate: Candidate) => {
        setSelectedCandidates((prev) => [...prev, candidate]);
        setSearch('');
        setSuggestions([]);
    };
    const deleteUser = (candidate: Candidate) => {

        const deletedUser = selectedCandidates.filter((user) => user.lastName !== candidate.lastName);

        setSelectedCandidates(deletedUser);
        return 1
    };
  return (
      <div className={`mx-auto mb-16  ${inter.className}`}>
          <div className="sticky space-x-0 top-[63px]">
              <Search value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      handleSelectCandidate={handleSelectCandidate}
                      suggestions={suggestions} />
        </div>
          <div className=" mt-5 flex flex-col gap-3">
              {selectedCandidates.length > 0 ?
                  (selectedCandidates.map((candidate, index) => (
                  <div key={index}>
                      <PostCard user={candidate} deleteUser={() => deleteUser(candidate)}/>
                  </div>))):
                    <div className="text-center text-gray-400 text-2xl font-bold">No candidates selected </div>
              }
          </div>
      </div>
  );
}
