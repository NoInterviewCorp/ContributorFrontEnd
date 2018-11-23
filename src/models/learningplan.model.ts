import { Topic } from "./topic.model";
import { Resource } from "./resource.model";

export class LearningPlan{
    LearningPlanID:number;
    Technology:string;
    Summary:string;
    UpVotes:number;
    DownVotes:number;
    Owner:string;
    Avatar:string;
    Resources:Resource[];
}