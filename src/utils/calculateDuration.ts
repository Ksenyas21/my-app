import {CandidateWorkHistory} from "@/types/candidate";

export const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate.toLowerCase() === 'present' ? new Date() : new Date(endDate);
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth() + (years * 12);
    const totalMonths = months % 12;
    const totalYears = Math.floor(months / 12);

    let duration = '';
    if (totalYears > 0) {
        duration += `${totalYears} year${totalYears > 1 ? 's' : ''} `;
    }
    if (totalMonths > 0) {
        duration += `${totalMonths} month${totalMonths > 1 ? 's' : ''}`;
    }
    return duration.trim();
};

export const findDiff = (start: string, end: string) => {
    return  new Date(end).getTime() - new Date(start).getTime();
}

export const calculateTotalDuration = (workHistory: CandidateWorkHistory[]): number  => {
    const totalMonths = workHistory.reduce((sum, item) => {
        return sum + findDiff(item.startDate, item.endDate);
    }, 0);
    const time = totalMonths / (1000 * 60 * 60 * 24 * 30.4375);
    return Math.ceil(time / 12);
};
