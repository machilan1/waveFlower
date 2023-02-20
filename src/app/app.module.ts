import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import{ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavtagComponent } from './navtag/navtag.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { OopsComponent } from './oops/oops.component';
import { NavtagSideComponent } from './navtag-side/navtag-side.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavtagComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    CardComponent,
    OopsComponent,
    NavtagSideComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
