import { ConceptReport } from "./conceptreport.model";

export class TechnologyReport {
    name: string;
    conceptReport: ConceptReport[];

    constructor() {
        this.name = "";
        this.conceptReport = [];
    }
}