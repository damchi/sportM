import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material";
import {StructureError} from "../../../utils/structure-error";
import * as roleJson from "../../config/role.json";
import * as daysJson from "../../config/days.json"
import {Membership} from "../../domain/membership";
import {MatDialogRef} from "@angular/material/dialog";
import {Days} from "../../domain/days";
import {TrainingS3} from "../../domain/training-s3";
import {MarkAsTouch} from 'src/utils/mark-as-touch';
import {saveAs} from 'file-saver';

export class PopupEntrainement {
  id: string;
  start: Date;
  end: Date;
  name: Date;
  memberCategory: string;
  daysOfTheWeek: any[]
}

export class ErrorMessages {
  name: StructureError[];
  start: StructureError[];
  end: StructureError[];
  memberCategory: StructureError[];
  daysOfTheWeek: StructureError[];
}

@Component({
  selector: 'app-popup-new-training',
  templateUrl: './popup-new-training.component.html',
  styleUrls: ['./popup-new-training.component.css']
})


export class PopupNewTrainingComponent extends MarkAsTouch implements OnInit {
  public trainForm: FormGroup;
  public errorMessages: ErrorMessages;
  public membershipType: Membership[];
  public days: Days[];


  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA)
              public data: PopupEntrainement,
              public dialogPop: MatDialogRef<PopupNewTrainingComponent>,
  ) {
    super();
  }

  ngOnInit() {
    this.trainForm = this.fb.group({
      name: new FormControl(this.data.name, [Validators.required]),
      start: new FormControl(this.data.start, [Validators.required]),
      end: new FormControl(this.data.end),
      memberCategory: new FormControl(this.data.memberCategory, [Validators.required]),
      daysOfTheWeek: new FormControl(this.data.daysOfTheWeek, [Validators.required]),
    });

    this.getRole();
    this.getDays();

    this.errorMessages = {
      name: [
        {type: 'required', message: 'the training name is required'}
      ],
      start: [
        {type: 'required', message: 'the starting date is required'}
      ],
      end: [
        {type: 'required', message: 'the ending date is required'}
      ],
      memberCategory: [
        {type: 'required', message: 'The membership category is required'}
      ],
      daysOfTheWeek: [
        {type: 'required', message: 'Training\'s days are required'}
      ]
    };

  }

  getRole() {
    this.membershipType = roleJson.membershipType;
  };

  getDays() {
    this.days = daysJson.days;
    if (this.data.daysOfTheWeek) {
      const idDays = this.data.daysOfTheWeek.map(e => e.id);
      this.trainForm.get('daysOfTheWeek').patchValue(this.days.filter(e => idDays.indexOf(e.id) !== -1));
    }
  };

  close() {
    this.dialogPop.close();
  }

  create() {
    if (this.trainForm.valid) {

      const t = this.trainForm.value;
      const e = new TrainingS3();
      e.id = this.data.id
      e.name = t.name;
      e.daysOfTheWeek = t.daysOfTheWeek;
      e.start = t.start;
      e.end = t.end;

      const blob = new Blob([JSON.stringify(e)], {type: 'application/json'});
      // let trainingJson = saveAs(blob, e.name.replace(" ", "-") + '.json');

      this.dialogPop.close({trainingJson: blob, training: e});

    } else {
      this.markAsTouched(this.trainForm);
    }
  }
}
