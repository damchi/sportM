import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachBoatCategoryTypeComponent} from "./coach-boat-category-type.component";


const routes: Routes = [{ path: '', component: CoachBoatCategoryTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachBoatCategoryTypeRoutingModule { }
