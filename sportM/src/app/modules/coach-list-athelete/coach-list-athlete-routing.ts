import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachListAtheleteModule} from "./coach-list-athelete.module";
import {CoachListAthleteComponent} from "./coach-list-athlete.component";

const routes: Routes = [{ path: '', component: CoachListAthleteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachListAthleteRoutingModule { }
