import { Injectable } from '@angular/core';
import {
  APIService, BatchAddBoatMembershipTypeMutation, CreateBoatMemberShipTypeInput,
  CreateBoatMutation,
  ListBoatsQuery
} from "../API.service";
import {Boat} from "../domain/boat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor(private api: APIService) {}

   saveBoat(boat: Boat): Promise<CreateBoatMutation> {
   return this.api.CreateBoat(boat);
  }

  saveBoatMemberType(boatMembershipTypeInput: CreateBoatMemberShipTypeInput[]):Promise<Array<BatchAddBoatMembershipTypeMutation>>{
    console.log(boatMembershipTypeInput)
    return this.api.BatchAddBoatMembershipType(boatMembershipTypeInput);
  }

  getBoats(filter) {
    return this.api.ListBoats(filter).then((boat: ListBoatsQuery) =>{
      return boat;
    })
  }

   updateBoat(boat: Boat) {
    return  this.api.UpdateBoat(boat);
  }
   delete(boat){
     return this.api.UpdateBoat(boat);
  }
}
