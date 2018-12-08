export class AttemptedConcept {
    conceptName: string;
    questionAttemptedCorrect: number;
    totalQuestionAttempted: number;
    constructor () {
        this.conceptName = "";
        this.questionAttemptedCorrect=0;
        this.totalQuestionAttempted=0;
    }
}