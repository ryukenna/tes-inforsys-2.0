import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private afs: AngularFirestore) { }


  addLoan(loanData) {
    this.afs.collection('loan').add(loanData).then(() => {
      console.log('Data Added');
    })
  }

  getLoan() {
    const data = this.afs.collection('loan')
    return data.snapshotChanges().pipe(map(actions => {
      return actions.map((a: any) => {
        const data = a.payload.doc.data()
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }))
  }
}