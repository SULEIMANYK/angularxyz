import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from '@angular/fire/DataBase';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Observable<any[]>;
  
  constructor(db: AngularFireDatabase) {
    this.products = db.list('products').valueChanges();  }

  ngOnInit() {
  }

}
