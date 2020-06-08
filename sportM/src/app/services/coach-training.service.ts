import { Injectable } from '@angular/core';
import {APIService} from '../API.service';
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoachTrainingService {

  constructor(private api: APIService) { }

  async getTrainings(dateRange) {
    return await this.api.ListTrainings(dateRange);
  }


}
