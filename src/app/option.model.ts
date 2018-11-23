export class Options {
    OptionId: number;
    Content: string;
    IsCorrect: boolean;
    QuestionId: number;

    public Options(){
        this.OptionId = 0;
        this.Content = "";
        this.IsCorrect = false;
        this.QuestionId = 0;
    }
}
