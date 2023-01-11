import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [],
})
export class ContactComponent {
  handleSubmit = (contactForm: NgForm) => {
    console.log(contactForm);
  };
}
