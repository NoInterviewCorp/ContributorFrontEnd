import { QuizData } from "./quizdata.model";
export class UserData {
    username: string;
    quizData: QuizData;
    constructor() {
        this.username="";
        this.quizData= new QuizData;
    }
}
