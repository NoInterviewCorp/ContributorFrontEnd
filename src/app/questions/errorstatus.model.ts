import { Question } from "../question.model";

export class ErrorStatus {
    MemberId: number;
    HasError: boolean;
    QuestionObj: Question;
}

