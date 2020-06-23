import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from "../share/share.module";
import {CoachBoatListComponent} from "./coach-boat-list.component";
import {CoachBoatListRoutingModule} from "./coach-boat-list-routing";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {PopupAssignBoatComponent} from "../../components/popup-assign-boat/popup-assign-boat.component";



@NgModule({
  declarations: [CoachBoatListComponent,PopupAssignBoatComponent],
  imports: [
    CommonModule,
    ShareModule,
    CoachBoatListRoutingModule,
    MatCheckboxModule
  ],
  entryComponents:[PopupAssignBoatComponent]
})
export class CoachBoatListModule { }
