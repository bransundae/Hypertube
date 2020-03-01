import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./modules/home/home.module";
import {DefaultModule} from "./modules/default/default.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DefaultModule,
    NgbModule,
    CoreModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
