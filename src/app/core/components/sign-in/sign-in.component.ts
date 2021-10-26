import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignINComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private loginSerice: LoginService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: '',
      password: ''
    })
  }

  login() {
    this.loginSerice.login(this.form.value)
  }
}
