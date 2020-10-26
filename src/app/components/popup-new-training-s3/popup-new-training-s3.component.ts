import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import {StructureError} from "../../../utils/structure-error";
import * as roleJson from "../../config/role.json";
import * as daysJson from "../../config/days.json"
import {Membership} from "../../domain/membership";
import {MatDialogRef} from "@angular/material/dialog";
import {Days} from "../../domain/days";
import {TrainingS3} from "../../domain/training-s3";
import {MarkAsTouch} from 'src/utils/mark-as-touch';
import {ListMembershipTypesQuery} from "../../API.service";
import {MembershipTypeService} from "../../services/membership-type.service";

export class PopupEntrainement {
  id: string;
  start: Date;
  end: Date;
  name: Date;
  memberCategory: string;
  daysOfTheWeek: any[]
  time: any[]
}

export class ErrorMessages {
  name: StructureError[];
  start: StructureError[];
  end: StructureError[];
  memberCategory: StructureError[];
  daysOfTheWeek: StructureError[];
  time: StructureError[];
}

@Component({
  selector: 'app-popup-new-training',
  templateUrl: './popup-new-training-s3.component.html',
  styleUrls: ['./popup-new-training-s3.component.css']
})


export class PopupNewTrainingS3Component extends MarkAsTouch implements OnInit {
  public trainForm: FormGroup;
  public userTypes: any[] = [];
  public errorMessages: ErrorMessages;
  public days: Days[];


  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA)
              public data: PopupEntrainement,
              public dialogPop: MatDialogRef<PopupNewTrainingS3Component>,
              private serviceUserType: MembershipTypeService
  ) {
    super();
  }

  ngOnInit() {
    this.trainForm = this.fb.group({
      name: new FormControl(this.data.name, [Validators.required]),
      start: new FormControl(this.data.start, [Validators.required]),
      end: new FormControl(this.data.end),
      time: new FormControl(this.data.time),
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
      ],
      time: [
        {type: 'required', message: 'Training\'s time is required'}
      ]
    };

  }

  getRole() {
    this.serviceUserType.getUserType().then((type: ListMembershipTypesQuery) => {
      this.userTypes = type.items;
    });
  }

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
      e.time = t.time;
      e.memberCategory = t.memberCategory;

      const blob = new Blob([JSON.stringify(e)], {type: 'application/json'});
      this.dialogPop.close({trainingJson: blob, training: e});

    } else {
      this.markAsTouched(this.trainForm);
    }
  }
}
