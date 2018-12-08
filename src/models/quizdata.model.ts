import { AttemptedConcept } from "./attemptedconcepts.model";

export class QuizData {
    techName: string;
    attemptedOn: string;
    conceptsAttempted: AttemptedConcept[];

    constructor() {
        this.techName="";
        this.attemptedOn="";
        this.conceptsAttempted=[];
    }
}