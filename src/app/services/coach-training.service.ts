import {Injectable} from '@angular/core';
import {APIService, CreateTrainingMutation, ListTrainingsQuery} from '../API.service';
import {Training} from "../domain/training";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoachTrainingService {

  constructor(private api: APIService) {
  }

   getTrainings(filter,limit) {
    return this.api.ListTrainings(filter,limit).then((training:ListTrainingsQuery) =>{
      return training;
    });
  }

   saveTrainingDb(training: Training): Promise<CreateTrainingMutation> {
     return this.api.CreateTraining(training);
  }

  updateTrainingDb(training: Training) {
    return this.api.UpdateTraining(training);
  }

  deleteTrainingDB(trainingId) {
    return this.api.DeleteTraining(trainingId);

  }
}
