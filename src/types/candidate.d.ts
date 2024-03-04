export interface Candidate {
    firstName: string;
    lastName: string;
    location: string;
    gender: string;
    workHistory: CandidateWorkHistory[];
}

export interface CandidateWorkHistory {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
}
