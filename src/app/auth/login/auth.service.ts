import { Injectable } from '@angular/core';
import { UserService } from '../../shared/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  login(email?: string, pwd?: string): boolean {
    //return this.userService.getUserByEmail(email)?.password == pwd;
    return (email == 'falloumbow@gmail.com' && pwd == 'passer') ? true : false;
  }
}
