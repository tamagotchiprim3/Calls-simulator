import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentCallsRoutingModule } from './recent-calls-routing.module';
import { RecentCallsPageComponent } from './pages/recent-calls-page/recent-calls-page.component';
import { RecentCallsListComponent } from './components/recent-calls-list/recent-calls-list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TreeSelectModule } from 'src/app/shared/components/controls/tree-select/tree-select.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecentCallsPageComponent, RecentCallsListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecentCallsRoutingModule,
    NzListModule,
    NzButtonModule,
    TreeSelectModule,
  ],
})
export class RecentCallsModule {}
