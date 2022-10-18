import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentCallsRoutingModule } from './recent-calls-routing.module';
import { RecentCallsPageComponent } from './pages/recent-calls-page/recent-calls-page.component';
import { RecentCallsFormComponent } from './components/recent-calls-form/recent-calls-form.component';


@NgModule({
  declarations: [
    RecentCallsPageComponent,
    RecentCallsFormComponent
  ],
  imports: [
    CommonModule,
    RecentCallsRoutingModule
  ]
})
export class RecentCallsModule { }
