import { UserService } from './user.service';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { 
    this.userService = inject(UserService);
  }

  isAutenticated(): boolean {
    const loggedUser = JSON.parse(localStorage.getItem("loggedUser") || "null");
    return loggedUser != null;
  }

  loginUser(email: string, password: string) {
    if(email == "admin@admin.com" && password == "admin") {
      localStorage.setItem("loggedUser", JSON.stringify({
        email, password
      }));
      return true;
    }
    return false;
  }

  logoutUser() {
    localStorage.removeItem("loggedUser");
  }
}
