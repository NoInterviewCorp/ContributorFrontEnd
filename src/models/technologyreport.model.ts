import { ConceptReport } from "./conceptreport.model";

export class TechnologyReport {
    technologyName: string;
    conceptReports: ConceptReport[];

    constructor() {
        this.technologyName = "";
        this.conceptReports = [];
    }
}