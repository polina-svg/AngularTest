import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  public signUpForm = this.fb.group({
    firstName: '',
    lastName: '',
    login: '',
    password: ['', [Validators.minLength(8), this.passwordValidator]],
    confirmPassword: ['', [this.passwordConfirmed.bind(this)]],
    role: ''
  }, [this.passwordConfirmed]);

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

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


  private passwordValidator(control: FormControl): ValidationErrors | null {
    const value = control.value;
    const hasCapitalLetter = /[A-Z]/.test(value);

    if (!hasCapitalLetter) {
      return {invalidPassword: 'Пароль не прошел валидацию'};
    }
    return null;
  }

  private passwordConfirmed(control: FormGroup): ValidationErrors | null {
    if (this.signUpForm) {
      return this.signUpForm?.controls['password'].value === this.signUpForm?.controls['confirmPassword'].value ? null : {'mismatch': true};
    }
    return null
  }
}
