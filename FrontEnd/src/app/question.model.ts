import { BloomTaxonomy } from "./bloomTaxonomy.model";
import { Options } from "./option.model";

export class Questions {
    questionId: number
    problemStatement: string;
    options: Options[];
    resourceLink: string;
    bloomLevel: BloomTaxonomy;
    topicId: number;
    hasPublished: boolean;
}
