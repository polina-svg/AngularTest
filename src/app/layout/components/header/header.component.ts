import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LoginService} from "../../../core/services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLogin: boolean | undefined

  constructor(public translate: TranslateService, private loginService: LoginService) {
    this.loginService.currentUser.subscribe((user) => {
      this.isLogin = !!user;
    });

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout()
  }
}
