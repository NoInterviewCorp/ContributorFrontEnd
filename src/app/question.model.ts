import { BloomTaxonomy } from "./bloomTaxonomy.model";
import { Option } from "./option.model";
import { Resource } from "src/models/resource.model";
import { Technology } from "./technology.model";
import { Concept } from "./resourceform/resourceform.component";

export class Question {
    questionId: string;
    concepts: Concept[];
    resourceId: string;
    bloomLevel: BloomTaxonomy;
    problemStatement: string;
    options: Option[];
    correctOption: Option;
    technology: Technology;
    

    constructor() {
        this.questionId = null,
        this.problemStatement = "",
        this.options = [];
        this.correctOption = new Option(),
        this.bloomLevel = 1,
        this.technology = new Technology;
        this.concepts = [];
    }
}
