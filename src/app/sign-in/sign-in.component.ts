import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignINComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signinForm.invalid) {
      return;
    }
    console.warn(this.signinForm.value);
    if (this.authservice.checkLogin(this.signinForm.value)) {
      alert("Sign IN successfull");
      this.router.navigateByUrl('/portfolio');
    }
    else{
      alert("Wrong Credentials");
      this.router.navigateByUrl('/signin');
    }
  }
}
