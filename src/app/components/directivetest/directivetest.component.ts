import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivetest',
  templateUrl: './directivetest.component.html',
  styleUrls: ['./directivetest.component.css']
})
export class DirectivetestComponent implements OnInit {
  student = [
    { name: 'ahyoyo', email: 'ahyoyo@gmail.com', major: 'CS', year: 'third' },
    { name: 'meankie', email: 'meankie@gmail.com', major: 'CE', year: 'second'},
    { name: 'waiimini', email: 'waiimini@gmail.com', major: 'CS', year: 'third'},
    { name: 'bally', email: 'bally@gmail.com', major: 'CS', year: 'third'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
