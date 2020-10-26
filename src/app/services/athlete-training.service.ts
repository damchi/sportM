import { Injectable } from '@angular/core';
import {
  APIService,
  CreateAthleteAttendenceInput,
  ListTrainingsQuery,
  UpdateAthleteAttendenceInput
} from "../API.service";
import {AthleteAttendence} from "../domain/athlete-attendence";

@Injectable({
  providedIn: 'root'
})
export class AthleteTrainingService {

  constructor(private api: APIService) {
  }

  getAthlete(athleteId: string) {
    return this.api.GetUser(athleteId);
  }

  getTrainings(filter,limit) {
    return this.api.ListTrainings(filter,limit).then((training:ListTrainingsQuery) =>{
      return training;
    });
  }

  async saveTrainingsAttendences(athleteAttende: CreateAthleteAttendenceInput[]){
    return await this.api.BatchAddAthleteAttendence(athleteAttende);
  }
  async updateTrainingsAttendences(athleteAttende: UpdateAthleteAttendenceInput){
    return await this.api.UpdateAthleteAttendence(athleteAttende);
  }
}
