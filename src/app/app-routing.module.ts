import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren: () => 
    import('./modules/auth/auth.module').then(
      (m) => m.AuthModule
    )
  },
  {
    path : 'index',
    loadChildren: () => 
    import('./modules/index/index.module').then(
      (m) => m.IndexModule
    )
  },
  {
    path : '',
    redirectTo: '',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
