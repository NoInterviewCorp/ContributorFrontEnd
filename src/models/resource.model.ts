import { BloomTaxonomy } from "src/app/bloomTaxonomy.model";
import { Technology } from "src/app/technology.model";
import { Question } from "src/app/question.model";
import { Concept } from "src/app/resourceform/resourceform.component";

export class Resource {
    resourceId: string;
    name: string;
    description: string;
    resourceLink: string;
    questions: Question[];
    bloomLevel: BloomTaxonomy;
    hasPublished: boolean;
    concepts: Concept[];
    technologies: Technology[];
    constructor() {
        this.resourceId = "",
            this.name = "",
            this.description = "",
            this.resourceLink = "",
            this.questions=[],    
            this.bloomLevel = 1,
            this.hasPublished = false,
            this.concepts = [
                {
                    name: ""
                }
            ],
            this.technologies = [{
                name: ""
            }]
    }
}