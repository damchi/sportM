import { Injectable } from '@angular/core';
import {APIService} from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class CoachTrainingService {

  constructor(private api: APIService) { }

  async getTrainings(dateRange) {
    return await this.api.ListTrainings(dateRange);
  }


}
