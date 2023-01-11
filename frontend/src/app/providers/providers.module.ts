import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProvidersComponent } from './providers.component';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { DeleteProvidersComponent } from './delete-providers/delete-providers.component';
import { EditProvidersComponent } from './edit-providers/edit-providers.component';
import { DetailsProvidersComponent } from './details-providers/details-providers.component';

@NgModule({
  declarations: [
    ProvidersComponent,
    AddProvidersComponent,
    DeleteProvidersComponent,
    EditProvidersComponent,
    DetailsProvidersComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    ProvidersComponent,
    AddProvidersComponent,
    DeleteProvidersComponent,
    EditProvidersComponent,
    DetailsProvidersComponent,
  ]
})
export class ProvidersModule {}
