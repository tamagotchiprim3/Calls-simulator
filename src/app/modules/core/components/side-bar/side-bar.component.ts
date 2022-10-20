import { Component, OnInit } from '@angular/core';
import {
  CALLS_PATH,
  RECENT_CALLS_PATH,
} from 'src/app/shared/constants/routing-path.const';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public isCollapsed: boolean = false;
  public callsPath: string = CALLS_PATH.path;
  public recentCallsPath: string = RECENT_CALLS_PATH.path;
  constructor() {}

  ngOnInit(): void {}

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
