import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login-adm/login-adm.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PetsCarouselComponent } from './components/pets-carousel/pets-carousel.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { PetsSearchComponent } from './components/pets-search/pets-search.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NotFoundComponent,
    PetsCarouselComponent,
    LoginComponent,
    PetCardComponent,
    BannerComponent,
    RodapeComponent,
    TestimonialsComponent,
    TestimonialComponent,
    PetsSearchComponent,
    PetsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
