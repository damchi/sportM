import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Training} from "../../domain/training";
import {AthleteService} from "../../services/athlete.service";

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: PopupAssignBoat,private serviceAthlete: AthleteService) { }

  ngOnInit() {
    this.getAthelete();
  }
  getAthelete(){
    this.idsAthelte = [];
    for(let i =0; i< this.data.training.athleteAttending.length; i++){
      this.idsAthelte.push(this.data.training.athleteAttending[i].athleteID)
    }
    this.serviceAthlete.getByIds(this.idsAthelte).then((athlete) => console.log(athlete));
  }

  getBoat(){

  }
}
