import {ChurchMember} from "./ChurchMember";

export class Attendance {
    id: number;
    member: ChurchMember;
    attended: boolean;
    date: Date;
}
