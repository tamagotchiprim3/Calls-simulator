import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CorePageComponent, SideBarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzDividerModule,
  ],
})
export class CoreModule {}
