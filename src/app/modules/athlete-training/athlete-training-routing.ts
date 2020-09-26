import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AthleteTrainingComponent} from "./athlete-training.component";

const routes: Routes = [{ path: '', component: AthleteTrainingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteTrainingRoutingModule { }
