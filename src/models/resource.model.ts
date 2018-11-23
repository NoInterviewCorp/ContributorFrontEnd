import { BloomTaxonomy } from "src/app/bloomTaxonomy.model";
import { Technology } from "src/app/technology.model";
import { Questions } from "src/app/question.model";

export class Resource{
    ResourceId:string;
    ResourceName:string;
    ResourceLink:string;
    Description:string;
    BloomsTaxonomy:BloomTaxonomy;
    Technology:Technology;
    Questions:Questions[];
}