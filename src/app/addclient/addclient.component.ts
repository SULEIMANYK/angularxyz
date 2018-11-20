import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/DataBase';
import { client }    from '../client';
import {  Router}  from  '@angular/router'



@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  

  itemList:AngularFireList<any>;
  client = new client ( 0 ,'', '','' ,'')
  constructor(  public  router:Router,public db :AngularFireDatabase) { 
    this.itemList =  db.list('clients') ;
  }

  ngOnInit() {
  }
  addclient(){
    this.itemList.push({ name :this.client.name,adresse:this.client.adresse ,
      telephone : this.client.telephone,  otherinformations :this.client.otherinformations})
      this.router.navigate(['clients'])
  }
 

}
