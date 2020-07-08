import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from "../share/share.module";
import {CoachBoatsRoutingModule} from "./coach-boats-routing";
import {CoachBoatsComponent} from "./coach-boats.component";
import {PopupNewBoatComponent} from "../../components/popup-new-boat/popup-new-boat.component";



@NgModule({
  declarations: [CoachBoatsComponent,PopupNewBoatComponent],
  imports: [
    CommonModule,
    CoachBoatsRoutingModule,
    ShareModule,
  ],
  entryComponents:[PopupNewBoatComponent]
})
export class CoachBoatsModule { }
