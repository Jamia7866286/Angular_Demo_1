import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MynewserviceService } from './mynewservice.service';
import { Routes, RouterModule } from '@angular/Router';


import { AppComponent } from './app.component';
import { MyEventComponent } from './my-event/my-event.component';
import { CustompipesComponent } from './custom-pipes/custompipes.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './About/about.component';
import { ContactComponent } from './Contact/contact.component';
import { HeaderComponent } from './Header/header.component';

const route: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MyEventComponent,
    CustompipesComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,

    RouterModule.forRoot(route),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
