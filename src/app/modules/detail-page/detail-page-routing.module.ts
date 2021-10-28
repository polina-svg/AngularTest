import {NgModule} from '@angular/core';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {DetailPageComponent} from "./detail-page.component";


const routes: Routes = [
  {
    path: ':id', component: DetailPageComponent, pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPageRoutingModule {
}
