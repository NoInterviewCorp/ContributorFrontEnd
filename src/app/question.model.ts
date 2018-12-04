import { BloomTaxonomy } from "./bloomTaxonomy.model";
import { Option } from "./option.model";

export class Questions {
    Id: string;  //Id
    ProblemStatement: string;
    Options: Option[];
    BloomLevel: BloomTaxonomy;
}
