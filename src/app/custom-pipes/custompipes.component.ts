import { Pipe, PipeTransform } from '@angular/core';
// import { Server } from 'selenium-webdriver/safari';

@Pipe ({
  name: 'myPipe'
})
export class CustompipesComponent implements PipeTransform {

  transform(value: any, hobies: string): any {
    if (hobies === 'Football') {
        return 'Good Hoby:' + value;
    }
    else {
      return 'Bad Hoby: ' + value;
    }
  }
}
