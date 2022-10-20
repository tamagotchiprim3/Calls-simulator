import { Component, DoCheck, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { ITypeOfCall } from 'src/app/shared/interfaces/call.interface';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss'],
})
export class TreeSelectComponent
  implements OnInit, ControlValueAccessor, DoCheck
{
  public nodes: ITypeOfCall[] = [
    {
      title: "A - Machinist's call",
      key: 'A',
      isLeaf: true,
    },
    {
      title: "B - Ambulance's call",
      key: 'B',
      isLeaf: true,
    },
    {
      title: "C - Ministry of Emergency Situations's call",
      key: 'C',
      isLeaf: true,
    },
    {
      title: "D - Police's call",
      key: 'D',
      isLeaf: true,
    },
  ];
  public value: any;
  public onChange: (value: any) => void;
  public onTouched: () => void;
  public control = new FormControl();

  constructor(private ngControl: NgControl) {
    ngControl.valueAccessor = this;
    if (this.ngControl.control) {
      this.control.setParent(this.ngControl.control.parent);
    }
  }

  ngDoCheck(): void {}

  ngOnInit(): void {
    this.control.setValue(this.ngControl.control.value);
    this.control.valueChanges.subscribe((value: any) => {
      this.onChange(value);
    });
  }

  public writeValue(value: ITypeOfCall[]): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
