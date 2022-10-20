import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentCallsPageComponent } from './pages/recent-calls-page/recent-calls-page.component';

const routes: Routes = [
  {
    path: '',
    component: RecentCallsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentCallsRoutingModule {}
