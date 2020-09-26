import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from "../share/share.module";
import {AthleteTrainingRoutingModule} from "./athlete-training-routing";
import {AthleteTrainingComponent} from "./athlete-training.component";
import {MatRadioModule} from "@angular/material/radio";



@NgModule({
  declarations: [AthleteTrainingComponent],
  imports: [
    CommonModule,
    ShareModule,
    AthleteTrainingRoutingModule,
    MatRadioModule,

  ]
})
export class AthleteTrainingModule { }
