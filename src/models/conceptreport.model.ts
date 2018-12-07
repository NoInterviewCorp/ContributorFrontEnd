export class ConceptReport {
    name: string;
    knowledgeIntensity: number;
    comprehensionReport: number;
    applicationReport: number;
    analysisReport: number;
    synthesisReport: number;
    evaluationReport: number;

    constructor() {
        this.name = "";
        this.knowledgeIntensity = 0;
        this.comprehensionReport = 0;
        this.applicationReport = 0;
        this.analysisReport = 0;
        this.synthesisReport = 0;
        this.evaluationReport = 0;
    }
}