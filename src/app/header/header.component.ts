import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  header : string = "This is is my header conent"

  links : string [] = ["Home", "About", "Contact", "Feedback"]

  time : string = new Date().toLocaleString()

  constructor() { 

      setInterval(
        ()=> this.time = new Date().toLocaleString() ,

        5000

      )


  }

  ngOnInit() {
  }

}
