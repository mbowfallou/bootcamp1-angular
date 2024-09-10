import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private userService: UserService){

  }

  email: string = '';
  password: string = '';
  loginErrorMessage: string = '';

  connexion() {

    const user = this.userService.getUserByEmail(this.email);

    if(user && user.email == this.email && user.password == this.password) {
      localStorage.setItem('userSession', this.email);
      console.log("Loged in: " + this.email);
      
      this.router.navigate(['/home']);
    } else {
      this.loginErrorMessage = 'Email or password is incorrect.';
    }
  }
}
