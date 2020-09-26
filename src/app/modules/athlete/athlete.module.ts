import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AthleteComponent } from './athlete.component';
import {AthleteRoutingModule} from "./athlete-routing.module";
import {AthleteMenuComponent} from "../../components/athlete-menu/athlete-menu.component";
import {ShareModule} from "../share/share.module";
import {ShareMenuModule} from "../share-menu/share-menu.module";

@NgModule({
  declarations: [AthleteComponent,AthleteMenuComponent],
  imports: [
    CommonModule,
    AthleteRoutingModule,
    ShareModule,
    ShareMenuModule
  ]
})
export class AthleteModule { }
