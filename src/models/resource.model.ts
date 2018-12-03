import { BloomTaxonomy } from "src/app/bloomTaxonomy.model";
import { Technology } from "src/app/technology.model";
import { Questions } from "src/app/question.model";

export class Resource {
    ResourceId: string;
    ResourceName: string;
    ResourceLink: string;
    Description: string;
    BloomsTaxonomy: BloomTaxonomy;
    Technology: Technology;
    Questions: Questions[];
    constructor() {
        this.ResourceId = "",
        this.ResourceName = "",
        this.ResourceLink = "",
        this.Description = "",
        this.BloomsTaxonomy = 1,
        this.Technology = {
            technologyId: 1,
            name: "",
            Questions: [] //remove it laterr !!!!!!
        },
        this.Questions = []
    }
}