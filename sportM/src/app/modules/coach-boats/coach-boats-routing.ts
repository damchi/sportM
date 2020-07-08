import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachBoatsComponent} from "./coach-boats.component";

const routes: Routes = [{ path: '', component: CoachBoatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachBoatsRoutingModule { }
