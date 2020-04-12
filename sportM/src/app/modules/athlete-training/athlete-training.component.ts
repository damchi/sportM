import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import  moment from 'moment';


@Component({
  selector: 'app-athlete-training',
  templateUrl: './athlete-training.component.html',
  styleUrls: ['./athlete-training.component.css']
})
export class AthleteTrainingComponent implements OnInit {
  public trainingAttendenceForm: FormGroup;
  public currentMonth: string;
  public weekDays: string[] = [];
  public categoryMock = 'master';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.trainingAttendenceForm = this.fb.group({});
    this.displayWeek();
    this.displayMonth();
  }

  create() {
    console.log('ee');
    if (this.trainingAttendenceForm.valid) {
      const t = this.trainingAttendenceForm.value;
      return t;
    }
  }

  displayMonth() {
    this.currentMonth = moment().format('MMMM');
    return this.currentMonth;
  }

  displayWeek() {
    for (let i = 0; i < 7; i++) {
      const day = moment().startOf('isoWeek').add(i, 'days').format('dddd MMMM Do');
      if ((i === 0 || i === 2 || i === 4) && this.categoryMock === 'master') {
        this.weekDays.push(day);
      }
    }
    for (let i = 0; i < this.weekDays.length; i++) {
      this.trainingAttendenceForm.addControl('presence' + i, new FormControl('', [Validators.required]));
    }

    return this.weekDays;
  }
}
