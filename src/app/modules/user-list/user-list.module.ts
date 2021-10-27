import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import {UserListRoutingModule} from "./user-list-routing.module";
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import {MatListModule} from "@angular/material/list";
import {ShortNamePipe} from "../../shared/pipes/short-name.pipe";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



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
  ]
})
export class UserListModule { }
