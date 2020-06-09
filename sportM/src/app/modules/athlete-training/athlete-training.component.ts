import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import moment from 'moment';
import {Auth} from "aws-amplify";
import {Athlete} from "../../domain/athlete";
import {AthleteService} from "../../services/athlete.service";
import {Training} from "../../domain/training";


@Component({
  selector: 'app-athlete-training',
  templateUrl: './athlete-training.component.html',
  styleUrls: ['./athlete-training.component.css']
})
export class AthleteTrainingComponent implements OnInit {
  public trainingAttendenceForm: FormGroup;
  public currentMonth: string;
  public weekDays: string[] = [];
  public nextWeekDays: string[] = [];
  public nextWeek: number;
  public week: number;
  public categoryMock = 'master';
  public athlete = new Athlete();
  public trainingAnswer: Training[] =[];


  constructor(private fb: FormBuilder, private serviceAthlete: AthleteService,) {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.athlete.id = user.attributes.sub;
      this.athlete.email = user.attributes.email;
      await this.getAthlete(user.attributes.sub);
      this.displayWeek();
    })
      .catch(err => console.error(err));
  }

  ngOnInit() {
    this.displayMonth();
    this.trainingAttendenceForm = this.fb.group({});
  }

  async getAthlete(athleteId: string) {
    await this.serviceAthlete.getAthlete(athleteId).then(user => {
      if (user) {
        this.athlete = user;
        this.athlete.boatPreference = JSON.parse(user.boatPreference);
        this.athlete.side = JSON.parse(user.side);
      }
    });
  };

  displayMonth() {
    this.currentMonth = moment().format('MMMM');
    return this.currentMonth;
  }

  displayWeek() {
    for (let i = 0; i < 7; i++) {
      const day = moment().startOf('isoWeek').add(i, 'days').format('dddd MMMM Do');
      const nextWeekDay = moment().startOf('isoWeek').add(i + 7, 'days').format('dddd MMMM Do');
      if (moment().isoWeekday() > 5 && ((i + 7 === 7 || i + 7 === 9 || i + 7 === 11) && this.athlete.membershipType === 'master')) {
        this.nextWeek = moment().isoWeek() + 1;
        this.nextWeekDays.push(nextWeekDay)
      }
      if ((i === 0 || i === 2 || i === 4) && this.athlete.membershipType === 'master') {
        this.week = moment().isoWeek();
        this.weekDays.push(day);
      }
    }
    for (let i = 0; i < this.weekDays.length; i++) {
      this.trainingAttendenceForm.addControl('presence' + i, new FormControl('', [Validators.required]));
    }
    return this.weekDays;
  }

  async create() {
    if (this.trainingAttendenceForm.valid) {
      const t = this.trainingAttendenceForm.value;
      const training = new Training();
      let keys = Object.keys(t);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        const split = t[key].split(',');
        // training.trainingDay = moment(split[0], 'dddd MMMM Do').format('YYYY-MM-DD');
        // training.statut = split[1];
        this.trainingAnswer.push(training)
      }
      console.log(this.trainingAnswer);
      await this.serviceAthlete.saveTraining(this.trainingAnswer)
    }
  }
}
