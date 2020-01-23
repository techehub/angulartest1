import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 
  time : string = new Date().toLocaleString()

  constructor() { 

      setInterval(
        ()=> this.time = new Date().toLocaleString() ,

        5000

      )
        

  }
  ngOnInit() {
  }

  clickMe(){

      console.log ("I am clicked !!!")

  }


}
