
import { Injectable } from '@angular/core';
import { AngularFireDatabase , AngularFireList } from '@angular/fire/DataBase';
import { client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
   
  private dbPath = '/clients';
  clientsRef: AngularFireList<client> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.clientsRef = db.list(this.dbPath);
  }
  createclient( client:  client): void {
    this. clientsRef.push( client);
  }
 
  updateclient(key: string, value: any): void {
    this. clientsRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteclient(key: string): void {
    this.clientsRef.remove(key).catch(error => this.handleError(error));
  }
 
  getclientsList(): AngularFireList< client> {
    return this. clientsRef;
  }
 
  deleteAll(): void {
    this.clientsRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }

}
