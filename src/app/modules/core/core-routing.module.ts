import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CALLS_PATH,
  RECENT_CALLS_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { CorePageComponent } from './pages/core-page/core-page.component';

const routes: Routes = [
  {
    path: '',
    component: CorePageComponent,
    children: [
      {
        path: CALLS_PATH.path,
        loadChildren: () =>
          import('../calls/calls.module').then((m) => m.CallsModule),
      },
      {
        path: RECENT_CALLS_PATH.path,
        loadChildren: () =>
          import('../recent-calls/recent-calls.module').then(
            (m) => m.RecentCallsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
