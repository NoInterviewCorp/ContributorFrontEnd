import { BloomTaxonomy } from "./bloomTaxonomy.model";
import { Option } from "./option.model";
import { Resource } from "src/models/resource.model";
import { Technology } from "./technology.model";
import { Concept } from "./resourceform/resourceform.component";

export class Question {
    questionId: string;
    problemStatement: string;
    options: Option[];
    correctOption: Option;
    bloomLevel: BloomTaxonomy;
    hasPublished: boolean;
    technology: Technology;
    concepts: Concept[];

    constructor() {
        this.questionId = null,
        this.problemStatement = "",
        this.options = [];
        this.correctOption = new Option(),
        this.bloomLevel = 1,
        this.hasPublished = false;
        this.technology = new Technology;
        this.concepts = [];
    }
}
