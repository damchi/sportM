import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachBoatListRoutingModule } from './coach-boat-list-routing.module';
import { CoachBoatListComponent } from './coach-boat-list.component';
import {ShareModule} from "../share/share.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { PopupAssignAthleteComponent } from 'src/app/components/popup-assign-athlete/popup-assign-athlete.component';


@NgModule({
  declarations: [CoachBoatListComponent,PopupAssignAthleteComponent],
  imports: [
    CommonModule,
    CoachBoatListRoutingModule,
    CommonModule,
    ShareModule,
    MatCheckboxModule,
    DragDropModule
  ],
  entryComponents:[PopupAssignAthleteComponent]

})
export class CoachBoatListModule { }
