import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { AddclientComponent } from './addclient/addclient.component';

const routes: Routes = [  { path: 'addclient', component: AddclientComponent },{ path: 'clients', component: ClientsComponent },{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
