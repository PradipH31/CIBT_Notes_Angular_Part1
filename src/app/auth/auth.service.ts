import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'admin' }
  ]

  constructor() { }

  login(username: string, password: string): boolean {
    for (let i = 0; i < this.users.length; i++) {
      let user = this.users[i];
      if (user.username === username && user.password === password) {
        return true;
      }
    }
    return false;
  }

  loggedInUser(): boolean {
    if (!!localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
