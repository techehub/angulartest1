import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  display : boolean = true;

  onlineStyle = {color:"red"}
  regularStyle = {color:"green"}

  courses : any = [
    { id : "1111", name : "Java" , duration : 45, type : "O"},
    { id : "3333", name : "PHP" , duration : 45, type: "R"},
    { id : "2222", name : "Node" , duration : 40}
  ]
;
  constructor() { }

  ngOnInit() {
  }

  clearCourse (){

    this.courses=null
  }

  getCourse(){
    this.courses=[
      { id : "1111", name : "Java" , duration : 45, type : "O"},
      { id : "3333", name : "PHP" , duration : 45, type: "R"},
      { id : "2222", name : "Node" , duration : 40}
    ]
  ;
  }

}
