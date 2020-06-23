import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Training} from "../../domain/training";

export class PopupAssignBoat {
  training: Training;
}

@Component({
  selector: 'app-popup-assign-boat',
  templateUrl: './popup-assign-boat.component.html',
  styleUrls: ['./popup-assign-boat.component.css']
})
export class PopupAssignBoatComponent implements OnInit {
  public idsAthelte: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: PopupAssignBoat,) { }

  ngOnInit() {
    this.getAthelete();
  }
  getAthelete(){
    for(let i =0; i< this.data.training.athleteAttending.length; i++){
      this.idsAthelte.push(this.data.training.athleteAttending[i].athleteID)
    }
  }

  getBoat(){

  }
}
