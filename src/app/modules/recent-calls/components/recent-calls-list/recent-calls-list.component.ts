import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { ICall } from 'src/app/shared/interfaces/call.interface';

@Component({
  selector: 'app-recent-calls-list',
  templateUrl: './recent-calls-list.component.html',
  styleUrls: ['./recent-calls-list.component.scss'],
})
export class RecentCallsListComponent implements OnInit {
  public typeOfCallControls = new FormArray([]);
  @Input() listOfData?: ICall[];

  constructor() {}

  ngOnInit(): void {
    this.listOfData.forEach((call: ICall, index: number) => {
      this.typeOfCallControls.push(new FormControl());
    });
  }

  public deleteCall(index: number): void {
    this.typeOfCallControls.removeAt(index);
    this.listOfData.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(this.listOfData));
    console.log(this.typeOfCallControls.controls);
  }

  public getFormControlByIndex(index: number): FormControl {
    return this.typeOfCallControls.at(index) as FormControl;
  }

  public addType(index: number): void {
    if (this.typeOfCallControls.at(index).value) {
      this.listOfData[index].typeOfCall =
        this.typeOfCallControls.at(index).value;
    }
    localStorage.setItem('data', JSON.stringify(this.listOfData));
  }

  public trackByFn(index: any, item: any): any {
    return index;
  }
}
