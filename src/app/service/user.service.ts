import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { user } from 'src/model/user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: user;
  constructor(private afs: AngularFirestore) { }

  addData(users) {
    this.afs.collection('user').add(users).then(() => {
      console.log('Data Added');
    })
  }

  getData() {
    return this.afs.collection('user').valueChanges();
  }

  deleteData(Nama: string) {
    this.afs.doc('user/' + Nama).delete();
  }
}