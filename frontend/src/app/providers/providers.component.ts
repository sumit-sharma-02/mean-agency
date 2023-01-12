import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ProviderClass } from '../models/providers.class';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: [],
})
export class ProvidersComponent implements OnInit {
  providers: ProviderClass | any;
  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.providerService.getProviders().subscribe({
      next: (data) => {
        this.providers = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
