import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderClass } from 'src/app/models/providers.class';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-delete-providers',
  templateUrl: './delete-providers.component.html',
  styles: [],
})
export class DeleteProvidersComponent {
  company!: string;
  isDeleted = false;
  id!: number; // Service Provider's ID from the URL
  constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params: any) => {
        this.id = parseInt(params.get('id'), 10);
      },
    });
    this.deleteRecord();
  }

  deleteRecord() {
    this.providerService.deleteProvider(this.id).subscribe({
      next: (data) => {
        this.company = data.company.company_name;
        this.isDeleted = true;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
