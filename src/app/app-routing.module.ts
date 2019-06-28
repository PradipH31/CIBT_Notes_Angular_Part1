import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { LogoutComponent } from './auth/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'detail/: id',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    loadChildren:
      () => import('./customer/customer.module')
        .then(mod => mod.CustomerModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
