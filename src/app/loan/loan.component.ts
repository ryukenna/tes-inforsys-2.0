import { Component, OnInit } from '@angular/core';
import { LoanService } from '../service/loan.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Moment } from 'moment';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  
  dataSource: any;
  loanDetails = {
    NamaBuku: '',
    Penulis: '',
    TglPeminjaman: 'timestamp',
    TglPengembalian: 'timestamp'
  }

  
  displayedColumns = ['NamaBuku', 'Penulis', 'TglPeminjaman', 'TglPengembalian']

  constructor(private loan: LoanService) { }

  ngOnInit() {
    this.getLoan();
  }

  addLoan() {
    this.loan.addLoan(this.loanDetails);
  }

  async getLoan() {
    let x = await new Promise(res => {
      this.loan.getLoan().subscribe(z => {
        res(z)
      });
    })
    this.dataSource = x
  }

}