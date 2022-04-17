import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent implements OnInit {

  public contactusForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  get name() {
    return this.contactusForm.get('name');
  }

  get email() {
    return this.contactusForm.get('email');
  }

  get message() {
    return this.contactusForm.get('message');
  }
}
