export class UserProfile{
    UserId:string
    UserName:string;
    FullName:string;
    Description:string;
 
    constructor(){
       // this.UserId= "10",
       // this.UserName="",
        this.FullName="",
        this.Description=""
 
   let token=localStorage.getItem("TOKEN");
   // parseJwt (token);
   let jwtData = token.split('.')[1];
   let decodedJwtJsonData = window.atob(jwtData);
   let decodedJwtData = JSON.parse(decodedJwtJsonData);
   this.UserId= decodedJwtData.UserId;
   this.FullName=decodedJwtData.FullName;
    }
   // userId:string = this.token.FindFirst(ClaimTypes.UserId)?.Value;
 
 // var claimsIdentity = this.User.Identity as ClaimsIdentity;
  //var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;
 }