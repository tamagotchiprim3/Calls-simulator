import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeSelectComponent } from './tree-select.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TreeSelectComponent],
  imports: [CommonModule, NzTreeSelectModule, ReactiveFormsModule],
  exports: [TreeSelectComponent],
})
export class TreeSelectModule {}
