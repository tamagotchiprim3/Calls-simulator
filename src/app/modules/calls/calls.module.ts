import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsRoutingModule } from './calls-routing.module';
import { CallsPageComponent } from './pages/calls-page/calls-page.component';


@NgModule({
  declarations: [
    CallsPageComponent
  ],
  imports: [
    CommonModule,
    CallsRoutingModule
  ]
})
export class CallsModule { }
