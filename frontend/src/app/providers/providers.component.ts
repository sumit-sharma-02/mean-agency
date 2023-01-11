import { Component } from '@angular/core';
import { providers } from '../models/providers.data';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: [],
})
export class ProvidersComponent {
  providers = providers;
}
