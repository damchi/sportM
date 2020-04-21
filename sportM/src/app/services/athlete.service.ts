import {Injectable} from '@angular/core';
import {APIService} from "../API.service";
import {Athlete} from "../domain/athlete";


@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor(private api: APIService) {
  }

  async save(athlete: Athlete) {
    await this.api.CreateUser(athlete);
  }

  async saveTraining(training) {
    await this.api.BatchAddTraining(training);
  }

  async getAthlete(athleteId: string) {
    return await this.api.GetUser(athleteId)
  }

  async updateProfil(athlete: Athlete) {
    return await this.api.UpdateUser(athlete);
  }

}
