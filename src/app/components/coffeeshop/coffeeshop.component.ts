import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Order } from './order';

@Component({
  selector: 'app-coffeeshop',
  templateUrl: './coffeeshop.component.html',
  styleUrls: ['./coffeeshop.component.css']
})
export class CoffeeshopComponent implements OnInit {
  coffee: FormGroup;
  order:  Order;

  constructor(private fb: FormBuilder) {
    this.order = new Order('','',0,'','',false);
    this.coffee = this.fb.group({
      namecoffee: ['',Validators.minLength(5)],
      emailcoffee: ['',Validators.email],
      phonecoffee: ['',Validators.minLength(10)],
      drinkcoffee: ['',Validators.required],
      tempPreference: ['',Validators.required],
      sendText: [false,Validators.requiredTrue],
    });
  }
  submitorder(){
    this.order.name = this.coffee.value.namecoffee;
    this.order.email = this.coffee.value.emailcoffee;
    this.order.phone = this.coffee.value.phonecoffee;
    this.order.drink = this.coffee.value.drinkcoffee;
    this.order.tempPreference = this.coffee.value.tempPreference;
    this.order.sendText = this.coffee.value.sendText;

    const data: HTMLElement = document.getElementById('data') as HTMLElement
    const time: HTMLElement = document.getElementById('time') as HTMLElement

    let dateTime = new Date()

    data.innerHTML =  "Data Submitted: "+JSON.stringify(this.order);
    time.innerHTML = dateTime.toString();
  }

  ngOnInit(): void {
  }

}

