import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { user } from 'src/model/user.model';
import { map } from 'rxjs/operators';
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
    // return this.afs.collection('user').valueChanges();
    const data = this.afs.collection('user')
    return data.snapshotChanges().pipe(map(actions => {
      return actions.map((a: any) => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }))
  }

  deleteData(id) {
    return this.afs.collection("user").doc(id).delete();
  }
}