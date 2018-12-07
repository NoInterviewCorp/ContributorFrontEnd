import { TechnologyReport } from "./technologyreport.model";

export class UserReport {
    userId: string;
    technologyReport: TechnologyReport[];

    constructor() {
        this.userId = "";
        this.technologyReport = [];
    }
}