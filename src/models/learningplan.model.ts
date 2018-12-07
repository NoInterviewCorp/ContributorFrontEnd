import { Topic } from "./topic.model";
import { Resource } from "./resource.model";
import { Technology } from "src/app/technology.model";

export class LearningPlan{
    learningPlanId:string;
    authorId:string;
    name:string;
    description:string;
    technology:Technology;
    resources:Resource[];
    hasPublished:boolean;
    AverageRating:number;
    TotalSubscribers:number;
}