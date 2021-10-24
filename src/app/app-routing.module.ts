import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {LayoutModule} from "./layout/layout.module";
import {SignINComponent} from "./common/sign-in/sign-in.component";
import {SignUpComponent} from "./common/sign-up/sign-up.component";
import {ContentWithNavigationComponent} from "./layout/components/content-with-navigation/content-with-navigation.component";
import {NotFoundComponent} from "./common/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ContentWithNavigationComponent,
        children: [
          {
            path: '',
            loadChildren: (): Promise<any> => import('./user-list/user-list.module').then((modules) => modules.UserListModule),
          }
        ]
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

