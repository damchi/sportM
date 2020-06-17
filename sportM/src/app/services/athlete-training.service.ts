import { Injectable } from '@angular/core';
import {APIService} from "../API.service";

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

  async saveTrainingsAttendences(athleteAttende){
    return await this.api.BatchAddAthleteAttendence(athleteAttende);
  }
}
