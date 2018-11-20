import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/DataBase';
import { product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = '/products';
 productsRef: AngularFireList<product> = null;
  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list(this.dbPath); }

createproduct( product:  product): void {
  this. productsRef.push( product);
}


  updateproduct(key: string, value: any): void {
    this. productsRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteproduct(key: string): void {
    this.productsRef.remove(key).catch(error => this.handleError(error));
  }
 
  getproductsList(): AngularFireList< product> {
    return this. productsRef;
  }
 
  deleteAll(): void {
    this.productsRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }


}