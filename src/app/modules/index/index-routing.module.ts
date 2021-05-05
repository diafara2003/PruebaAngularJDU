import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init/init.component';

const routes: Routes = [
  {
    path : '',
    component: InitComponent
  },
  {
    path : 'inicio',
    component: InitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
