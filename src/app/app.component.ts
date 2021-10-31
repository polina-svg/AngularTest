import { Component } from '@angular/core';
import {LoaderService} from "./common/services/loader.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean | undefined;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }



}
