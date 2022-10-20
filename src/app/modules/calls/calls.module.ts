import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallsRoutingModule } from './calls-routing.module';
import { CallsPageComponent } from './pages/calls-page/calls-page.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
@NgModule({
  declarations: [CallsPageComponent],
  imports: [
    CommonModule,
    CallsRoutingModule,
    NzButtonModule,
    NzImageModule,
    NzTypographyModule,
  ],
})
export class CallsModule {}
