import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  addData(userdata) {
    this.afs.collection('user').add(userdata).then(() => {
      console.log('Data Added')
    })
  };

  getData() {
    return this.afs.collection('user', ref => ref.orderBy('Nama')).valueChanges();
  }
}