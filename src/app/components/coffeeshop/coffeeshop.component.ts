import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

interface Coffee {
  value: string;
  viewValue: string;
}
interface Choice {
  Hot: string;
  Cold: string;
}

@Component({
  selector: 'app-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  styleUrls: ['./coffeeshop.component.css']
})
export class CoffeeshopComponent implements OnInit {
  coffee: FormGroup;

  constructor(public fb: FormBuilder) {
    this.coffee = this.fb.group({
      namecoffee: ['',Validators.minLength(5)],
      emailcoffee: ['',Validators.email],
      phonecoffee: ['',Validators.minLength(10)],
    });
  }


  Choosecoffee: Coffee[] = [
    {value: 'Choose',viewValue:'What would you like to drink?'},
    {value: 'Cappuccino',viewValue: 'Cappuccino'},
    {value: 'Espresso',viewValue: 'Espresso'},
    {value: 'Latte',viewValue: 'Latte'},
  ];

  ngOnInit(): void {
  }

}

