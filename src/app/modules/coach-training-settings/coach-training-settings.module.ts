import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachTrainingSettingsRoutingModule } from './coach-training-settings-routing.module';
import { CoachTrainingSettingsComponent } from './coach-training-settings.component';


@NgModule({
  declarations: [CoachTrainingSettingsComponent],
  imports: [
    CommonModule,
    CoachTrainingSettingsRoutingModule
  ]
})
export class CoachTrainingSettingsModule { }
