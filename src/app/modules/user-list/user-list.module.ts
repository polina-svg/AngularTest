import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import {UserListRoutingModule} from "./user-list-routing.module";
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import {MatListModule} from "@angular/material/list";
import {ShortNamePipe} from "../../shared/pipes/short-name.pipe";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    ShortNamePipe,
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
  ]
})
export class UserListModule { }
