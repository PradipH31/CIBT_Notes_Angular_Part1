import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedInUser(): boolean {
    if (!!localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
