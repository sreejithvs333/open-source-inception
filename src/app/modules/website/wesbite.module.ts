import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {WebsiteRoutingModule} from './website-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WesbiteModule {}
