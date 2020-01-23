import { Component, OnInit } from '@angular/core';
import { ContactInfo } from '../contact-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contact : ContactInfo

  constructor() { 
     
      this.contact = new ContactInfo("My Company", "876876786", "aaa@bbb.com")

  }

  ngOnInit() {
  }

}
