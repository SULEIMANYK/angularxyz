import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { AddclientComponent } from './addclient/addclient.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [  { path: 'addclient', component: AddclientComponent },
{ path: 'clients', component: ClientsComponent },
{ path: '', component: HomeComponent } , { path: 'addproduct', component: AddproductComponent } ,
{ path: 'products', component: ProductsComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
