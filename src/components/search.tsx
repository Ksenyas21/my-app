import React from "react";
import {Candidate} from "@/types/candidate";
import inputImg from "@/assets/input_attachment.svg";
import Image from "next/image";
interface SearchProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    suggestions: Candidate[];
    handleSelectCandidate: (candidate: Candidate) => void
}

const Search = ({ value, onChange, suggestions, handleSelectCandidate }: SearchProps) => {
    return (
        <div className="border border-gray-300 bg-white p-4">
            <p className="text-bold pb-1">Search</p>
            <div className="flex gap-2 items-center justify-between w-full border border-gray-300 p-2.5 rounded">
                <Image src={inputImg} alt="stars" />
                <input
                    type="text"
                    placeholder="Michael Jordan..."
                    className="border-none text-gray-900 b w-full min-w-40"
                    value={value}
                    onChange={onChange}/>
            </div>

                {suggestions.length > 0 && (
                    <ul className="w-full bg-white shadow pl-2">
                        {suggestions.map((candidate, index) => (
                            <li className="cursor-pointer hover:bg-gray-200" key={index} onClick={() => handleSelectCandidate(candidate)}>
                                {`${candidate.firstName} ${candidate.lastName}`}
                            </li>
                        ))}
                    </ul>
                )}

        </div>
    );
}
export default Search;
