import { Injectable } from '@angular/core';

export interface userObj{
  name:string,
  email:string,
  password:string,
  mobileNo:string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  users:userObj[]=[];

  constructor() { }

  saveUser(user:any):boolean{
    this.users.push(user);
    localStorage.setItem("user", JSON.stringify(this.users));
    return true;
  }

  checkLogin(user:any):boolean{
    let data = JSON.stringify(localStorage.getItem('user'));
    let email:string=user.email;
    let password:string=user.password;
    console.log(data);
    console.log(email);
    
   if(data.includes(email) && data.includes(password)){
    return true;
   }
    return false;
  }
}
