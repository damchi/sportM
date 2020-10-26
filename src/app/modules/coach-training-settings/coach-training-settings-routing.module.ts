import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachTrainingSettingsComponent } from './coach-training-settings.component';

const routes: Routes = [{ path: '', component: CoachTrainingSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachTrainingSettingsRoutingModule { }
