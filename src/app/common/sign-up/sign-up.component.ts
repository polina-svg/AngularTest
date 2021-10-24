import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public  signUpForm = this.fb.group({
    name: '',
    userName: '',
    login: '',
    password: '',
    confirmPassword: ''
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  postForm() {
    console.log(this.signUpForm.value)
  }
}
