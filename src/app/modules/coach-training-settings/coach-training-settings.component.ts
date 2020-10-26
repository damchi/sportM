import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BoatService} from "../../services/boat.service";
import {APIService} from "../../API.service";

@Component({
  selector: 'app-coach-training-settings',
  templateUrl: './coach-training-settings.component.html',
  styleUrls: ['./coach-training-settings.component.css']
})
export class CoachTrainingSettingsComponent implements OnInit {
  public displayedColumns: string[] = ['Member category', 'Number of choices', 'option'];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

}
