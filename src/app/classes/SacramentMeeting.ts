import {Hymn} from "./Hymn";
import {Prayer} from "./Prayer";
import {Discourse} from "./Discourse";
import {Member} from "./Member";
import {SustainingRelease} from "./SustainingRelease";

export class SacramentMeeting {
    id: number;
    date: Date;
    hymns: Hymn[];
    announcements: string;
    sustainingReleases: SustainingRelease[];
    prayers: Prayer[];
    discourses: Discourse[];
    preside: Member;
    lead: Member;
    assistance: number;

}
