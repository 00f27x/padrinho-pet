import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login-adm/login-adm.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PetsSearchComponent } from './components/pets-search/pets-search.component';


const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'aboutus', component: AboutusComponent},
  { path : 'pets-search', component: PetsSearchComponent},
  { path : 'adm', component: LoginComponent},
  { path : 'contactus',component: ContactusComponent},
  { path : 'cadastro', component: CadastroComponent},
  { path : '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
