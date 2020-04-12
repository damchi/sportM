import { Component, OnInit } from '@angular/core';
import {Auth} from "aws-amplify";
import {Athlete} from "../../domain/athlete";

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.css']
})
export class AthleteComponent implements OnInit {

  public athlete = new Athlete();
  constructor() { }

  ngOnInit() {
  }

}
