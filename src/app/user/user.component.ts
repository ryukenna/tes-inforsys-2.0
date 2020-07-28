import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../service/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataSource: any;
  libraryDetails = {
    Nama: '',
    Email: '',
    NoId: '',
    NoHp: '',
  }

  displayedColumns = ['Nama', 'Email', 'NoId', 'NoHp']

  constructor(private user: UserService) { }

  addData() {
    this.user.addData(this.libraryDetails);
  }

  async getData() {
    let x = await new Promise(res => {
      this.user.getData().subscribe(z => {
        res(z)
      });
    })
    this.dataSource = x
  }

  ngOnInit() {
    this.getData();
  }
}
