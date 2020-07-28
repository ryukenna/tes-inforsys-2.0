import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanDetails = {
    NamaBuku: '',
    Penulis: ''
  }

  displayedColumns = ['position', 'nama', 'penulis', 'tglpeminjaman', 'tglpengembalian']

  constructor() { }

  ngOnInit() {
  }

}
