import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoachListAthleteComponent} from "./coach-list-athlete.component";
import {ShareModule} from "../share/share.module";
import {CoachListAthleteRoutingModule} from "./coach-list-athlete-routing";

@NgModule({
  declarations: [CoachListAthleteComponent],
  imports: [
    CommonModule,
    ShareModule,
    CoachListAthleteRoutingModule
  ]
})
export class CoachListAthleteModule { }
