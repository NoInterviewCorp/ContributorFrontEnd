export class UserProfile {
    userId: string
    userName: string;
    fullName: string;
    description: string;

    constructor() {
        let token = localStorage.getItem("TOKEN");
        // parseJwt (token);
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        this.userId = decodedJwtData.UserId;
        this.fullName = decodedJwtData.FullName;

    }
    // userId:string = this.token.FindFirst(ClaimTypes.UserId)?.Value;

    // var claimsIdentity = this.User.Identity as ClaimsIdentity;
    //var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;
}
export class UserWrapper {
    userId: string
    
    constructor() {
        let token = localStorage.getItem("TOKEN");
        // parseJwt (token);
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        this.userId = decodedJwtData.UserId;
      //  this.fullName = decodedJwtData.FullName;

    }
    // userId:string = this.token.FindFirst(ClaimTypes.UserId)?.Value;

    // var claimsIdentity = this.User.Identity as ClaimsIdentity;
    //var userId = claimsIdentity.FindFirst(ClaimTypes.Name)?.Value;
}