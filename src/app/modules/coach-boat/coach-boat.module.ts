import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachBoatRoutingModule } from './coach-boat-routing.module';
import { CoachBoatComponent } from './coach-boat.component';
import {PopupNewBoatComponent} from "../../components/popup-new-boat/popup-new-boat.component";
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [CoachBoatComponent,PopupNewBoatComponent],
  imports: [
    CommonModule,
    CoachBoatRoutingModule,
    ShareModule
  ],
  entryComponents:[PopupNewBoatComponent]
})
export class CoachBoatModule { }
