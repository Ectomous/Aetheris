import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';
  usersArray: User[] = [];

  constructor(private http: HttpClient) { 
    this.http = inject(HttpClient);
  }

  getUserByEmail(email: string) {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map((usersArray) => usersArray.find((user) => user.email == email))
    )
  }
}
