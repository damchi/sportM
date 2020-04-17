import { Injectable } from '@angular/core';
import {APIService} from "../API.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _api: APIService) { }

  async getUser(userId: string) {
    return await this._api.GetUser(userId);
  }

}
