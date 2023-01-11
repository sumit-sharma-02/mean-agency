import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderClass } from 'src/app/models/providers.class';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styles: [],
})
export class AddProvidersComponent implements OnInit {
  submitted = false;
  provider = new ProviderClass();
  public providersForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.providersForm = new FormGroup({
      firstname: new FormControl('Sumit', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastname: new FormControl('Sharma'),
      position: new FormControl(''),
      company_name: new FormControl(''),
      address: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      postal_code: new FormControl(''),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[2-9]{3}-[0-9]{3}-[0-9]{4}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl(''),
      tagline: new FormControl(''),
    });
  }

  // Method to easy access form controls
  get formCheck() {
    return this.providersForm.controls;
  }
  

  handleSubmit = () => {
    console.log(this.providersForm.value);
    this.submitted = true;
  };
}
