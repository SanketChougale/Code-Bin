import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],            //imports
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
constructor(private authService: AuthService){}
  // ***********************  by using Reactive Forms (FormControl, FormGroup)  ********************************************************************
  email = new FormControl("", [
    Validators.email,
    Validators.required
  ])

 password = new FormControl("", [       // give parametrs as array []
  Validators.required,                      
  Validators.minLength(6)
])

 loginForm = new FormGroup({              //in formGroup give parameters ()-> as object {}.  see syntax
  email : this.email,
  password: this.password
})
login(){
  console.log(this.loginForm.value)
  this.authService.loginUser(this.loginForm.value.email!, this.loginForm.value.password!)
}

reset(){
  this.loginForm.reset()
}
}