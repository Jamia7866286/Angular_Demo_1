import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MynewserviceService {

  constructor() { }

  newservicemethod() {
    return 'Hi new service';
  }
}
