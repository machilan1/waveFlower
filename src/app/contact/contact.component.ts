import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactForm!:FormGroup;
  ngOnInit(){
    this.contactForm = new FormGroup({
      username:new FormControl(null),
      email:new FormControl(null),
      phonenum:new FormControl(null),
      topic:new FormControl(null),
      message:new FormControl(null),
      check:new FormControl(null),
    

    });
  }

  sendForm(){
    console.log(this.contactForm)
  }
}
