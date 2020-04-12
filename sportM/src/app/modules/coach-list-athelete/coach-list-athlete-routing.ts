import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachListAtheleteModule} from "./coach-list-athelete.module";

const routes: Routes = [{ path: '', component: CoachListAtheleteModule }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachListAthleteRoutingModule { }
