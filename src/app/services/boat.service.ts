import { Injectable } from '@angular/core';
import {
  APIService, BatchAddBoatMembershipTypeMutation, CreateBoatMemberShipTypeInput, CreateBoatMembershipTypeMutation,
  CreateBoatMutation,
  ListBoatsQuery, UpdateBoatMembershipTypeInput
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

  saveBatchBoatMemberType(boatMembershipTypeInput: CreateBoatMemberShipTypeInput[]):Promise<Array<BatchAddBoatMembershipTypeMutation>>{
    console.log(boatMembershipTypeInput)
    return this.api.BatchAddBoatMembershipType(boatMembershipTypeInput);
  }

  saveBoatMembershipType(membershipType: CreateBoatMemberShipTypeInput):Promise<CreateBoatMembershipTypeMutation>{
    console.log(membershipType);
    return this.api.CreateBoatMembershipType(membershipType)
  }


  getBoats() {
    return this.api.ListBoats().then((boat: ListBoatsQuery) =>{
      return boat;
    })
  }

   updateBoat(boat: Boat) {
     return this.api.UpdateBoat(boat);
  }


  deleteBoatMembershipType(membersipType){
    return this.api.DeleteBoatMembershipType(membersipType)
  }

  delete(boatId){
     return this.api.DeleteBoat(boatId);
  }
}
