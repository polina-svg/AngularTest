import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  public  signUpForm = this.fb.group({
    name: '',
    login: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.signUpForm.controls['role'].setValue('user')
    }, 0);

  }

  postForm() {
    this.authService.register(this.signUpForm.value)
  }
}
