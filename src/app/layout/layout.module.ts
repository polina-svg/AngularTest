import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import { ContentWithNavigationComponent } from './components/content-with-navigation/content-with-navigation.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ContentWithNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    AngularMaterialModule
  ]
})
export class LayoutModule { }
