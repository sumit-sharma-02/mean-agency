import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProviderClass } from 'src/app/models/providers.class';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-edit-providers',
  templateUrl: './edit-providers.component.html',
  styles: [],
})
export class EditProvidersComponent implements OnInit {
  submitted = false;
  emailError = false;
  emailErrorMsg = 'Invalid Email. Try again or contact us.';
  providers!: ProviderClass[];
  provider: any = new ProviderClass();
  providersForm!: FormGroup;
  id!: number; // Service Provider's ID from the URL
  email?: string; // Service Provider's default email
  ready = false; // Load form only when data is present
  constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildFormControls();
    this.loadData();
    this.route.paramMap.subscribe({
      next: (params: any) => {
        this.id = parseInt(params.get('id'), 10);
      },
    });
    this.providerService.getProvider(this.id).subscribe({
      next: (data) => {
        this.provider = data[0];

        // Flatten object
        const temp: any = {};
        for (const [key, value] of Object.entries(this.provider)) {
          switch (key) {
            case '_id' || 'id':
              break;
            case 'company':
              for (const [key2, value2] of Object.entries(this.provider[key])) {
                if (key2 != '_id') {
                  temp[key2] = value2;
                }
              }
              break;
            default:
              temp[key] = value;
              break;
          }
        }
        this.providersForm.patchValue(temp);
        this.ready = true;
      },
      error: (error) => console.log(error),
    });
  }

  // Method to easy access form controls
  get formCheck() {
    return this.providersForm.controls;
  }

  handleSubmit = () => {
    this.buildProvider();
    if (!this.isInvalidEmail()) {
      this.providerService.updateProvider(this.id, this.provider).subscribe({
        complete: () => {
          this.submitted = true;
          this.emailError = false;
        },
        error(error) {
          console.log(error);
        },
      });
    }
  };

  // Get all records from the database
  loadData() {
    this.providerService.getProviders().subscribe({
      next: (data: ProviderClass[]) => {
        this.providers = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Check for duplicate email
  isInvalidEmail() {
    let email = this.providersForm.get('email')?.value;
    if (
      this.email == email &&
      this.providers.filter((obj) => obj?.company?.email == email).length > 0
    ) {
      this.emailError = true;
      return true;
    } else {
      return false;
    }
  }

  // Generate new ID
  getNewId() {
    let newId: number;
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999;
      if (this.providers.findIndex((obj) => obj?.id == newId) == -1) {
        return newId;
      }
    }
  }

  // Build new provider object
  buildProvider() {
    let providerData = this.providersForm.value;
    this.provider.id = this.getNewId();
    this.provider.firstname = providerData.firstname;
    this.provider.lastname = providerData.lastname;
    this.provider.position = providerData.position;
    this.provider.company = {
      company_name: providerData.company_name,
      address: providerData.address,
      address2: providerData.address2,
      city: providerData.city,
      state: providerData.state,
      postal_code: providerData.postal_code,
      phone: providerData.phone,
      email: providerData.email,
      description: providerData.description,
      tagline: providerData.tagline,
    };
  }

  // Build Form Controls
  buildFormControls() {
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
        Validators.pattern('^[2-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl(''),
      tagline: new FormControl(''),
    });
  }
}
