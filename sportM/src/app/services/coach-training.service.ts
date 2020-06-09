import {Injectable} from '@angular/core';
import {APIService} from '../API.service';
import {Training} from "../domain/training";

@Injectable({
  providedIn: 'root'
})
export class CoachTrainingService {

  constructor(private api: APIService) {
  }

  async getTrainings(dateRange) {
    return await this.api.ListTrainings(dateRange);
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
