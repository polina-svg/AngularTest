import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import {DetailPageRoutingModule} from "./detail-page-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {OnlineStatusDirective} from "./directives/online-status.directive";
import { CustomAvatarComponent } from './components/custom-avatar/custom-avatar.component';



@NgModule({
  declarations: [
    DetailPageComponent,
    OnlineStatusDirective,
    CustomAvatarComponent
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
  ]
})
export class DetailPageModule { }
