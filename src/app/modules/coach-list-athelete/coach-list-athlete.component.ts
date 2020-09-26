import { Component, OnInit } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-coach-list-athlete',
  templateUrl: './coach-list-athlete.component.html',
  styleUrls: ['./coach-list-athlete.component.css']
})
export class CoachListAthleteComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'type', 'option'];


  ngOnInit() {
  }

  csvRecords: any[] = [];
  header = true;

  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    const files = $event.srcElement.files;

    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        debugger;
        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }
}