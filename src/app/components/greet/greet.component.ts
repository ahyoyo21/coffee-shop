import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor(private Logger: LogService) { }

  ngOnInit(): void {
  }

  name:string = "supakorn";
  greet():void{
    alert("Hello :"+this.name);
    this.Logger.log("Testing greet method");
  }

  title:string="Welcome to my e-Store";
  isDisabled = true;
  item:string = "item";
  searchItem:string ="";
  numItems = 0;

  searchItems(): void{
    this.numItems = 10;
    this.searchItem = this.item;
  }

}
