import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css']
})
export class HomeContactComponent implements OnInit {

  myNames : string  [];
  address1: string = "My address" 
  address2: string ;

  constructor() { }

  ngOnInit() {
  }

  addValues (val){
    if (this.myNames== undefined){
      this.myNames=[]
    }
    
    this.myNames.push(val)
  }


}
