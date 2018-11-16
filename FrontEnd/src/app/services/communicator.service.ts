import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  private title:string;
  constructor() { }
  getTitle(){
    return this.title;
  }
  setTitle(title:string){
   this.title=title;
  }
}