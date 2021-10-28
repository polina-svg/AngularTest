import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import {DetailPageRoutingModule} from "./detail-page-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class DetailPageModule { }
