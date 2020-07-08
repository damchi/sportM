import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoachListAthleteComponent} from "./coach-list-athlete.component";
import {ShareModule} from "../share/share.module";
import {CoachListAthleteRoutingModule} from "./coach-list-athlete-routing";
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { PopupCreateAthleteComponent } from '../../components/popup-create-athlete/popup-create-athlete.component';

@NgModule({
  declarations: [
    CoachListAthleteComponent,
    PopupCreateAthleteComponent ],
  imports: [
    CommonModule,
    ShareModule,
    CoachListAthleteRoutingModule,
    NgxCsvParserModule,
  ],
  entryComponents: [
    PopupCreateAthleteComponent
  ]
})
export class CoachListAtheleteModule { }
