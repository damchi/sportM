import { Injectable } from '@angular/core';
import {APIService, ListBoatsQuery} from "../API.service";
import {Boat} from "../domain/boat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(private api: APIService) {}

   async saveBoat(boat: Boat) {
    await this.api.CreateBoat(boat);
  }

  async getBoats() {
   return await this.api.ListBoats();
  }

  async updateBoat(boat: Boat) {
    await this.api.UpdateBoat(boat);
  }
  async delete(boatId) {
    await this.api.DeleteTraining(boatId);
  }
}
