import {ChurchMember} from "./ChurchMember";
import {Topic} from "./Topic";

export class Discourse {
  id: number;
  member: ChurchMember;
  topic: Topic;
  assignedBy:ChurchMember;
  date: Date;
}
