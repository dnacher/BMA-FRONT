import {Member} from "./Member";

export class Discourse {
  id: number;
  member: Member;
  topic: string;
  assignedBy:Member;
  date: Date;
}
