import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/DataBase';
import { product }    from '../product';
import {  Router}  from  '@angular/router'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  itemList:AngularFireList<any>;
product =new product('',0,'','')
constructor(  public  router:Router,public db :AngularFireDatabase) { 
  this.itemList =  db.list('products') ;

}

  ngOnInit() {
  }
  addproduct(){
    this.itemList.push({name:this.product.name,price :this.product.price ,
     reference : this.product.reference,  otherinformations :this.product.otherinformations})
      this.router.navigate(['products'])
  }
}
