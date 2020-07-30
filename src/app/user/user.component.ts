import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../service/user.service'
import { user } from 'src/model/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: user[];
  dataSource: any;
  displayedColumns = ['Nama', 'Email', 'NoId', 'NoHp']

  constructor(private user: UserService) { }

  ngOnInit() {
    this.getData();
  }

  addData() {
    this.user.addData(this.users);
  }

  async getData() {
    let x = await new Promise(res => {
      this.user.getData().subscribe(z => {
        res(z)
      });
    })
    this.dataSource = x
  }

}
