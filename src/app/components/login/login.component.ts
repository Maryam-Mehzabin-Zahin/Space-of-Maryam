import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  loginObj: any = {
    username: '',
    password: ''
  };

  router = inject(Router);

  login() {
    if(this.loginObj.username === 'xyz' && this.loginObj.password === '124') {
      alert('Login successful!');
      this.router.navigateByUrl('/admin');
  }
  else{
    debugger
    alert('Invalid username or password!');
  }
  }
}
