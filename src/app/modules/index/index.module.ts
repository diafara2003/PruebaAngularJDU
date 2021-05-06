import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { InitComponent } from './init/init.component';
import { FooterIndexComponent } from './footer-index/footer-index.component';

@NgModule({
  declarations: [
    InitComponent,
    FooterIndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
