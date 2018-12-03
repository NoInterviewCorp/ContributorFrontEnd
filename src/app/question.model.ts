import { BloomTaxonomy } from "./bloomTaxonomy.model";
import { Options } from "./option.model";

export class Questions {
        QuestionId: number  //Id
    ProblemStatement: string;
    Options: Options[];
    BloomLevel: BloomTaxonomy;
}
