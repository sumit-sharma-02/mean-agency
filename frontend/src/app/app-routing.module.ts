import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProvidersComponent } from './providers/providers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProvidersComponent } from './providers/add-providers/add-providers.component';
import { EditProvidersComponent } from './providers/edit-providers/edit-providers.component';
import { DetailsProvidersComponent } from './providers/details-providers/details-providers.component';
import { DeleteProvidersComponent } from './providers/delete-providers/delete-providers.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "providers", component: ProvidersComponent},
  {path: "providers/add", component: AddProvidersComponent},
  {path: "providers/edit/:id", component: EditProvidersComponent},
  {path: "providers/details/:id", component: DetailsProvidersComponent},
  {path: "providers/delete/:id", component: DeleteProvidersComponent},
  {path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
