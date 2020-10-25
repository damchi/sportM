import { Injectable } from '@angular/core';
import {APIService} from "../API.service";
import { BoatCategoryType } from '../domain/boat-category-type';

@Injectable({
  providedIn: 'root'
})
export class BoatCategoryTypeService {

  constructor(private api: APIService) {}

  async saveBoatCategoryType(type: BoatCategoryType) {
    await this.api.CreateBoatCategoryType(type);
  }

  async getBoatCategoryType() {
    return await this.api.ListBoatCategoryTypes();
  }

  async updateBoatCategoryType(type: BoatCategoryType) {
    await this.api.UpdateBoatCategoryType(type);
  }
  async deleteBoatCategoryType(BoatOwnerTypeId) {
    await this.api.DeleteBoatCategoryType(BoatOwnerTypeId);
  }
}
