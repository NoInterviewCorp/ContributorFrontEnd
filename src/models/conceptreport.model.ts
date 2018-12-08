export class ConceptReport {
    conceptName: string;
    knowledgeIntensity: number;
    comprehensionIntensity: number;
    applicationIntensity: number;
    analysisIntensity: number;
    synthesisIntensity: number;
    evaluationIntensity: number;

    constructor() {
        this.conceptName = "";
        this.knowledgeIntensity = 0;
        this.comprehensionIntensity = 0;
        this.applicationIntensity = 0;
        this.analysisIntensity = 0;
        this.synthesisIntensity = 0;
        this.evaluationIntensity = 0;
    }
}