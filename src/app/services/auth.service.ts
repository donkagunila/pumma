import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public signIn(userData: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public isLoggedIn(){
    console.log(localStorage.getItem('ACCESS_TOKEN'));
    if(!!localStorage.getItem('ACCESS_TOKEN')){
      return true
    };
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
