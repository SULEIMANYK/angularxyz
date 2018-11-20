import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { AddclientComponent } from './addclient/addclient.component';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/DataBase';
import { FormsModule }   from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    AddclientComponent,
    ProductsComponent,
    AddproductComponent ,
  ],
  imports: [
    BrowserModule,    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule , AngularFireAuthModule ,AngularFireDatabaseModule  ,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
