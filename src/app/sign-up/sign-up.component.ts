import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  signupForm: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authservice:AuthService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobileNo: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    console.warn(this.signupForm.value);
    this.authservice.saveUser(this.signupForm.value)
  }
}
