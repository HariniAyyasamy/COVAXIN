import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 
  signup: { email?: string, username?: string, password?: string } = {}; 
  retypePassword: string = '';
  passwordMatchError: boolean = false;

  constructor(private router: Router) {}

  signupUser() {
    // Check if the passwords match
    if (this.signup.password !== this.retypePassword) {
      this.passwordMatchError = true;
      return;
    }
    this.passwordMatchError = false;

    // Perform signup logic here (e.g., send data to backend)
    console.log('User Signed Up:', this.signup);

    // Redirect to the home page or perform other actions on successful signup
    this.router.navigate(['/home']);
  }

}
