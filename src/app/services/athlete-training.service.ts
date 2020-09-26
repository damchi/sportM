import { Injectable } from '@angular/core';
import {APIService, CreateAthleteAttendenceInput, UpdateAthleteAttendenceInput} from "../API.service";
import {AthleteAttendence} from "../domain/athlete-attendence";

@Injectable({
  providedIn: 'root'
})
export class AthleteTrainingService {

  constructor(private api: APIService) {
  }

  getAthlete(athleteId: string) {
    return this.api.GetUser(athleteId)
  }

  async getTrainings(filter,limit) {
    return await this.api.ListTrainings(filter,limit);
  }

  async saveTrainingsAttendences(athleteAttende: CreateAthleteAttendenceInput[]){
    return await this.api.BatchAddAthleteAttendence(athleteAttende);
  }
  async updateTrainingsAttendences(athleteAttende: UpdateAthleteAttendenceInput){
    return await this.api.UpdateAthleteAttendence(athleteAttende);
  }
}
