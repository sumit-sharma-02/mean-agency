import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProviderClass } from 'src/app/models/providers.class';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styles: [
  ]
})
export class AddProvidersComponent implements OnInit {
  submitted = false;
  provider = new ProviderClass();
  public providersForm!: FormGroup;
  
  constructor(){}

  ngOnInit(): void {
      this.providersForm = new FormGroup({
        firstname : new FormControl('Sumit'),
        lastname : new FormControl('Sharma'),
        position : new FormControl(),
        company_name : new FormControl(),
        address : new FormControl(),
        address2 : new FormControl(),
        city : new FormControl(),
        state : new FormControl(),
        postal_code : new FormControl(),
        phone : new FormControl(),
        email : new FormControl(),
        description : new FormControl(),
        tagline : new FormControl(),
      });
  }

  handleSubmit = () => {
    console.log(this.providersForm.value)
    this.submitted = true;
  }
} 
