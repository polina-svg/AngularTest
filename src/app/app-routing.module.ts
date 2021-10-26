import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {LayoutModule} from "./layout/layout.module";
import {SignINComponent} from "./core/components/sign-in/sign-in.component";
import {SignUpComponent} from "./core/components/sign-up/sign-up.component";
import {NotFoundComponent} from "./common/components/not-found/not-found.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'users-list',
        pathMatch: 'full',
      },
      {
        path: 'users-list',
        loadChildren: (): Promise<any> => import('./modules/user-list/user-list.module').then((modules) => modules.UserListModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'sign-in',
        component: SignINComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ]
  }
];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

