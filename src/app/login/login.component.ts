import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showUserLogin: boolean = true;
  showAdminLogin: boolean = false;
  showSignup: boolean = false;

  user: any = {};
  admin: any = {};
  signup: any = {};

  // Static admin credentials
  adminCredentials = {
    username: 'admin',
    password: 'adminpassword'
  };
  constructor(private router: Router) {}

  login(userType: string) {
    if (userType === 'user') {
      
      console.log('User Login:', this.user);
    } else if (userType === 'admin') {
      
      if (
        this.admin.username === this.adminCredentials.username &&
        this.admin.password === this.adminCredentials.password
      ) {
        console.log('Admin Login:', this.admin);
        this.router.navigate(['home']);
      } else {
        console.log('Invalid admin credentials');
        alert("Wrong username or password");
      }
    }
  }

  toggleUserType() {
    this.showUserLogin = !this.showUserLogin;
    this.showAdminLogin = !this.showAdminLogin;
  }
}
