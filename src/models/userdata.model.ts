import { QuizData } from "./quizdata.model";
export class UserData {
    username: string;
    data: QuizData;
    constructor() {
        this.username="";
        this.data= new QuizData;
    }
}
