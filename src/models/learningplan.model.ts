import { Topic } from "./topic.model";
import { Resource } from "./resource.model";

export class LearningPlan{
    LearningPlanID:number;
    LearningPlanName:string;
    Technology:string;
    Summary:string;
    UpVotes:number;
    DownVotes:number;
    Owner:string;
    Avatar:string;
    Resources:Resource[];
}
export class LearningPlanFeedBack{
    LearningPlanFeedBackId:number;
    LearningPlanID:string;
    UserId:string;


}