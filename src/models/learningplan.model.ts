import { Resource } from "./resource.model";

export class LearningPlan{
    LearningPlanID:string;
    LearningPlanName:string;
    Technology:string;
    Summary:string;
    UpVotes:number;
    DownVotes:number;
    Owner:string;
    Avatar:string;
    Resources:Resource[];
}
