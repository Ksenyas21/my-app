import React from "react";
import {Candidate} from "@/types/candidate";
import {calculateDuration, calculateTotalDuration, findDiff} from "@/utils/calculateDuration";
import Image from "next/image";
import close from "@/assets/close.svg";
import menAvatar from "@/assets/men_avatar.svg";
import womenAvatar from "@/assets/women_avatar.svg";
import workImg from "@/assets/work_image_1.png";


const PostCard = ({user, deleteUser}: {user: Candidate, deleteUser: React.MouseEventHandler<HTMLDivElement>}) => {

    const sortedWorkHistory = [...user.workHistory]
        .sort((a, b) =>
            (findDiff(b.startDate, b.endDate)) - (findDiff(a.startDate, a.endDate)));

    const years = calculateTotalDuration(user.workHistory);
    return(
        <div className="bg-white mx-7 flex flex-col border border-gray-300 rounded-lg">
            <div className="border-b border-gray-300">
                <div className="flex justify-end">
                    <div onClick={deleteUser} className="text-blue-700 text-2xl m-3 cursor-pointer">
                        <Image src={close} alt="X"/>
                    </div>
                </div>
            </div>
            <div className="m-3">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <Image src={user.gender === 'female' ? womenAvatar : menAvatar} alt="X"/>
                        <div>
                            <p className="text-2xl text-bold">{`${user.firstName} ${user.lastName}`}</p>
                            <p className="text-gray-400 text-sm">{user.location}</p>
                        </div>
                    </div>
                    <div className="border border-gray-300 bg-gradient-to-r from-custom-light to-custom-dark px-4 py-2">
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-xs font-bold">Experience</p>
                            <p className="text-3xl font-bold">{years} <span
                                className="text-sm font-light">{years > 0 ? `year${years > 1 ? 's' : ''}` : ''}</span></p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="m-3">
                <div className="flex w-full gap-3 items-center">
                    <p className="whitespace-nowrap text-gray-400 font-semibold text-xs">Work History • {user.workHistory.length}</p>
                    <div className=" w-full h-[1px] bg-gray-300"/>
                </div>
            </div>
            <div>
            {sortedWorkHistory.map((job, index) => {
                    const duration = calculateDuration(job.startDate, job.endDate);
                    return (
                        <span key={index} className="p-3 flex items-center gap-2">
                            <Image src={workImg}
                                   alt="work img" />
                            <p className="font-medium text-sm">{job.company} <span className="text-gray-400 text-xs">•</span>  {job.title} </p>
                            <p className="text-gray-400 font-semibold text-xs">{duration}</p>
                        </span>
                    );
                })
                }
            </div>
        </div>
    );
};

export default PostCard;
