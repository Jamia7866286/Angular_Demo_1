import { Injectable } from '@angular/core';


@Injectable()
export class MyserviceService {

  constructor() {}
  hobies = ['Footbal', 'Cricket', 'Marbles' ];
  myhob() {
    return 'Hi Services';
  }
}
