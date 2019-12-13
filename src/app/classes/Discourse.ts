import {ChurchMember} from "./ChurchMember";
import {Topic} from "./Topic";

export class Discourse {
  id: number;
  churchMember: ChurchMember;
  topic: Topic;
  assignedBy:ChurchMember;
  date: Date;

}
