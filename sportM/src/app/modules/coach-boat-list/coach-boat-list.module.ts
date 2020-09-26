import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from "../share/share.module";
import {CoachBoatListComponent} from "./coach-boat-list.component";
import {CoachBoatListRoutingModule} from "./coach-boat-list-routing";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {PopupAssignAthleteComponent} from "../../components/popup-assign-athlete/popup-assign-athlete.component";
import {PopupAssignBoatComponent} from "../../components/popup-assign-boat/popup-assign-boat.component";
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [CoachBoatListComponent,PopupAssignAthleteComponent,PopupAssignBoatComponent],
  imports: [
    CommonModule,
    ShareModule,
    CoachBoatListRoutingModule,
    MatCheckboxModule,
    DragDropModule
  ],
  entryComponents:[PopupAssignAthleteComponent,PopupAssignBoatComponent]
})
export class CoachBoatListModule { }
