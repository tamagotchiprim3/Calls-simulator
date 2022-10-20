import { Component, OnInit } from '@angular/core';
import { ICall } from 'src/app/shared/interfaces/call.interface';

@Component({
  selector: 'app-recent-calls-page',
  templateUrl: './recent-calls-page.component.html',
  styleUrls: ['./recent-calls-page.component.scss'],
})
export class RecentCallsPageComponent implements OnInit {
  public data?: ICall[];

  constructor() {}

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem('data'));
  }
}
