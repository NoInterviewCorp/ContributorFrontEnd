import { BloomTaxonomy } from "./bloomTaxonomy.model";
import { Options } from "./option.model";

export class Questions {
    QuestionId: number
    ProblemStatement: string;
    Options: Options[];
    BloomLevel: BloomTaxonomy;
}
