import { Component, OnInit } from '@angular/core';
import { MyEventComponent } from './my-event/my-event.component';
import { MyserviceService } from './myservice.service';
import { MynewserviceService } from './mynewservice.service';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [MyserviceService, MynewserviceService]
})
export class AppComponent implements OnInit {

  title = 'app';
  acces = [];
  methodaccess;
  newservice;
  constructor(private data: MyserviceService , private my_new_service: MynewserviceService) {
    this.acces = this.data.hobies;
    this.methodaccess = this.data.myhob();
    this.newservice = this.my_new_service.newservicemethod();
  }
  ngOnInit() {
  }
}
