export interface ICall {
  name: string;
  timeOfStart: Date;
  timeOfEnd: Date;
  time: string;
  typeOfCall?: string;
}

export interface ITypeOfCall {
  title: string;
  key: string;
  isLeaf: boolean;
}
