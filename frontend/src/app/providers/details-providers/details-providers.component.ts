import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderClass } from 'src/app/models/providers.class';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-details-providers',
  templateUrl: './details-providers.component.html',
  styles: [],
})
export class DetailsProvidersComponent {
  provider: ProviderClass | any;
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
    this.loadData();
  }

  loadData() {
    this.providerService.getProvider(this.id).subscribe({
      next: (data) => {
        this.provider = data[0];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
