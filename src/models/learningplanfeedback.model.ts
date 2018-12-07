export class LearningPlanFeedBack {
    LearningPlanFeedBackId: number;
    LearningPlanID: string;
    UserId: string;
    Subscribe: number;
    Star: number;

    constructor(){
        // this.UserId= "10",
        // this.UserName="",
        // this.FullName="",
        // this.Description=""
  
    let token=localStorage.getItem("TOKEN");
    // parseJwt (token);
    if(token != null){
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        this.UserId= decodedJwtData.UserId;
    }
   // this.FullName=decodedJwtData.FullName;
     }
 }