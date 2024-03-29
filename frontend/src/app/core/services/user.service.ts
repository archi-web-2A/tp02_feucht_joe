import { Injectable } from '@angular/core';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!: User;

  createUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}
