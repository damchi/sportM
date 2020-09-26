import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import moment from 'moment';
import {Auth} from "aws-amplify";
import {Athlete} from "../../domain/athlete";
import {Training} from "../../domain/training";
import {AthleteTrainingService} from "../../services/athlete-training.service";
import {CreateAthleteAttendenceInput} from "../../API.service";
import {AthleteAttendence} from "../../domain/athlete-attendence";
import * as choiceJson from "../../config/choice.json";
import {Choice} from "../../domain/choice";


@Component({
  selector: 'app-athlete-training',
  templateUrl: './athlete-training.component.html',
  styleUrls: ['./athlete-training.component.css']
})
export class AthleteTrainingComponent implements OnInit {
  public trainingAttendenceForm: FormGroup;
  public currentMonth: string;
  public week: number;
  public athlete = new Athlete();
  public trainingAnswer: CreateAthleteAttendenceInput[] = [];
  public trainings: Training[];
  public filter: object;
  public dateStartTraining: any;
  public dateEndTraining: any;
  public choice: Choice[];
  public choiceSelected: string[] = [];
  public athleteHasChoice: boolean = false;


  constructor(private fb: FormBuilder, private serviceAthleteTraining: AthleteTrainingService) {

  }

  ngOnInit() {

    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.athlete.id = user.attributes.sub;
      this.athlete.email = user.attributes.email;
      await this.getAthlete(user.attributes.sub);
      // this.displayWeek();
    })
      .catch(err => console.error(err));

    this.displayMonth();
    this.trainingAttendenceForm = this.fb.group({});
  }

  getTrainings() {

    this.trainings = [];
    this.week = moment().isoWeek() + 1;
    this.dateStartTraining = moment().startOf('week').add(7, 'days');
    this.dateEndTraining = moment().startOf('week').add(14, 'days');

    this.filter = {
      trainingDate: {
        ge: this.dateStartTraining,
        le: this.dateEndTraining
      },
      athleteCategory: {
        contains: this.athlete.membershipType
      },
      statut: {
        eq: true
      }
    }

    let limit = 10000;
    this.serviceAthleteTraining.getTrainings(this.filter, limit).then((training) => {
      for (let i = 0; i < training.items.length; i++) {
        this.trainings[i] = {
          id: training.items[i].id,
          trainingDate: training.items[i].trainingDate,
          trainingTime: training.items[i].trainingTime,
          athleteCategory: training.items[i].athleteCategory,
          statut: training.items[i].statut,
          athleteAttending: training.items[i].athleteAttending.items
        };
        this.trainingAttendenceForm.addControl('presence' + i, new FormControl('', [Validators.required]));
      }
      this.getChoice();
    });
  }

  getChoice() {
    this.choice = choiceJson.choice;
    let idAttendee = [];
    if (this.trainings) {
      for (let i = 0; i < this.trainings.length; i++) {
        idAttendee = this.trainings[i].athleteAttending.map(e => e.athleteID);
      }
      for (let i = 0; i < this.trainings.length; i++) {
        for (let k = 0; k < idAttendee.length; k++) {
          if (idAttendee[k] == this.athlete.id) {
            const val = this.trainings[i].athleteAttending.filter(e => e.athleteID == this.athlete.id);
            this.trainingAttendenceForm.get('presence' + i).patchValue(val[0].attending);
            this.athleteHasChoice = true;
          }
        }
      }
    }
  }


  getAthlete(athleteId: string) {
    this.serviceAthleteTraining.getAthlete(athleteId).then(user => {
      if (user) {
        this.athlete = user;
        this.getTrainings();
      }
    });
  };

  getDateToString(date: string) {
    return moment(date).format("dddd, MMMM Do");
  }

  displayMonth() {
    this.currentMonth = moment().format('MMMM');
    return this.currentMonth;
  }

  isWeekEnd() {
    // if (moment().days() == 6 || moment().days() == 0) {
    //   return true
    // } else {
    //   return false
    // }
  }

  checkNumberOfFirstChoice() {
    let firstChoice = 0;
    let secondChoice = 0;
    const t = this.trainingAttendenceForm.value;
    let keys = Object.keys(t);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      const split = t[key].split(',');
      if (split[1] == '1stChoice') {
        firstChoice++;
      } else if (split[1] == '2ndChoice') {
        secondChoice++
      }
    }
    if ((this.athlete.membershipType === 'competitive' && firstChoice > 3) ||
      (this.athlete.membershipType === 'competitive' && secondChoice > 4) ||
      ((this.athlete.membershipType === 'master' || this.athlete.membershipType === 'rec') && firstChoice > 2) ||
      ((this.athlete.membershipType === 'master' || this.athlete.membershipType === 'rec') && secondChoice > 3)) {
      return false
    } else if ((this.athlete.membershipType === 'competitive' && firstChoice <= 3) ||
      (this.athlete.membershipType === 'competitive' && secondChoice <= 4) ||
      ((this.athlete.membershipType === 'master' || this.athlete.membershipType === 'rec') && firstChoice <= 2) ||
      ((this.athlete.membershipType === 'master' || this.athlete.membershipType === 'rec') && secondChoice <= 3)) {
      return true
    }
  }

  onChange(event) {
    const index = this.choiceSelected.indexOf(event.source._element.nativeElement.dataset.trainingid);
    if ( index == -1){
      this.choiceSelected.push(event.source._element.nativeElement.dataset.trainingid);
    } else{
      this.choiceSelected[index] =event.source._element.nativeElement.dataset.trainingid;
    }
  }

  async create() {
    if (this.trainingAttendenceForm.valid && this.checkNumberOfFirstChoice()) {
      const formValue = this.trainingAttendenceForm.value;
      let keys = Object.keys(formValue);
      if (this.athleteHasChoice == false) {
        for (let i = 0; i < keys.length; i++) {
          const attendence = new AthleteAttendence()
          attendence.trainingID = this.choiceSelected[i];
          attendence.athleteID = this.athlete.id;
          attendence.attending = formValue[keys[i]];
          this.trainingAnswer.push(attendence);
        }
        await this.serviceAthleteTraining.saveTrainingsAttendences(this.trainingAnswer);
      } else {
        for (let i = 0; i < this.trainings.length; i++) {
          for (let y = 0; y < this.trainings[i].athleteAttending.length; y ++){
            if (this.trainings[i].athleteAttending[y].athleteID == this.athlete.id &&
              this.trainings[i].athleteAttending[y].trainingID.indexOf(this.choiceSelected) != -1){
              console.log('in');
              this.trainings[i].athleteAttending[y].choice = this.choiceSelected[i];
              await this.serviceAthleteTraining.updateTrainingsAttendences(this.trainings[i].athleteAttending[y])
              console.log(this.trainings[i]);
              this.choiceSelected.shift();
            }

          }
        }
      }


      // this.athleteHasChoice = true;
    }
  }
}
