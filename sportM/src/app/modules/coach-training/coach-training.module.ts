import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoachTrainingComponent} from "./coach-training.component";
import {CoachTrainingRoutingModule} from "./coach-training-routing";
import {ShareModule} from "../share/share.module";
import {PopupNewTrainingComponent} from 'src/app/components/popup-new-training/popup-new-training.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [CoachTrainingComponent, PopupNewTrainingComponent],
  imports: [
    CommonModule,
    CoachTrainingRoutingModule,
    ShareModule,
    NgxMaterialTimepickerModule,
  ],

  entryComponents: [PopupNewTrainingComponent]
})
export class CoachTrainingModule {
}
