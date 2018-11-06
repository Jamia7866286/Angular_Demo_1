import { Component, ViewChild, ElementRef } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { MynewserviceService } from '../mynewservice.service';


@Component({
  selector: 'app-my-event',
  template: `
    <div class="Todoitem">
      <h2>Todo List item details: </h2>
       <div class="row">
       <div class="col-md-9">
       <input type='text' #photoInput name="inpvalue" autofocus [(ngModel)]="inpvalue" class="form-control" />
     </div>
     <div class="col-md-3">
       <div class="edit_update">
       <button (click)='additem(photoInput.value)' class="btn btn-primary add_btn">Add Item</button>
       <button (click)='update(photoInput.value)' class="btn btn-success btn_update" *ngIf="!btnUpdate">Update</button>
       </div>
     </div>
       </div>
       <ol *ngFor='let ind of todoarray; let i = index' class="todo-list list-unstyled">
         <li class="list-item">{{ i+1 +". "+ ind}}
             <div class="Edit">
               <i class="fa fa-pencil" aria-hidden="true" (click)=edit(ind,i)></i> <i class="fa fa-trash-o float-right" aria-hidden="true" (click)=delete(i)></i>
             </div>
         </li>
       </ol>
    </div>


    <p>This service in another component: {{ " My Hobies: " + methodaccess2 }}</p>
    <ul *ngFor='let text of acces2'>
      <li>{{"Its my hobby: "+ text }}</li>
    </ul>
    <h1>My Custom pipe data here: </h1>
    <ul *ngFor='let custompipe of mypipedata'>
      <li>{{ custompipe | myPipe }} <i class="fa fa-trash-o" aria-hidden="true"></i></li>
    </ul>
    <h1>Its new service : {{ newservice }}</h1>
  `,
  styleUrls: ['./myevent.component.css'],

  providers: [MynewserviceService],
})
export class MyEventComponent {
  @ViewChild('photoInput') nameField: ElementRef;

  fname;
  count = 0;
  acces2 = [];
  newservice;
  methodaccess2;
  mypipedata;
  inpvalue = '';
  todoarray = [];
  btnUpdate = true;
  constructor(private data2: MyserviceService, private neservice: MynewserviceService) {
    this.acces2 = this.data2.hobies;
    this.methodaccess2 = this.data2.myhob();
    this.mypipedata = ['pipe1', 'pipe2', 'pipe3', 'pipe4', 'Football'];
    this.newservice = this.neservice.newservicemethod();
  }

  additem(item) {
    this.inpvalue = item;
    if (this.inpvalue === '') {
        alert('Please insert value!');
        this.nameField.nativeElement.focus();
    }
    else {
      this.todoarray.push(this.inpvalue);
      this.inpvalue = '';
      this.nameField.nativeElement.focus();
    }
  }
  delete(index) {
    if (confirm('You want to delete item?')) {
        this.todoarray.splice(index, 1);
        alert('Item Deleted Successfully!');
    } else {
        return false;
    }
  }

  edit(edit_val, edit_index) {
    this.inpvalue = edit_val;
    this.todoarray[edit_index] = this.inpvalue;
    this.nameField.nativeElement.focus();
    if (this.btnUpdate === true){
      this.btnUpdate = false;
    }
  }

  // update(update_val) {
  //   this.inpvalue = update_val;
  //   this.todoarray.push(this.inpvalue);
  // }
}
