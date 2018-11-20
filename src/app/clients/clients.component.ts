import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from '@angular/fire/DataBase';
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Observable<any[]>;
  
  constructor(db: AngularFireDatabase) {
    this.clients = db.list('clients').valueChanges();  }

  ngOnInit() {
  }

}
