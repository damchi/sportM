import {Injectable} from '@angular/core';
import {APIService} from '../API.service';
import {Training} from "../domain/training";

@Injectable({
  providedIn: 'root'
})
export class CoachTrainingService {

  constructor(private api: APIService) {
  }

  async getTrainings(filter, limit) {
    return await this.api.ListTrainings(filter, limit);
  }

  async saveTrainingDb(training: Training) {
    await this.api.CreateTraining(training);
  }

  async updateTrainingDb(training: Training) {
    await this.api.UpdateTraining(training);
  }

  async deleteTrainingDB(trainingId) {
    await this.api.DeleteTraining(trainingId);
  }
}
