import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-list-athlete',
  templateUrl: './coach-list-athlete.component.html',
  styleUrls: ['./coach-list-athlete.component.css']
})
export class CoachListAthleteComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'type', 'option'];

  constructor() { }

  ngOnInit() {
  }

}
