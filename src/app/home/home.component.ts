import { Component, OnInit } from '@angular/core';
import {ServiceMainService} from '../service-main.service';
import {Colaboradores} from '../models/colaboradores.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EditUserService} from '../edit-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list;
  head: Array<string>;
  loading = true;

  constructor(public http: ServiceMainService, public editUser: EditUserService) {
  }


  ngOnInit() {
    this.http.getData().subscribe((res: Array<object>) => {
      this.list = res.map(i => i as Colaboradores);
      this.head = Object.keys(this.list[0]);
      this.loading = false;
    }, err => {
      console.log(err);
      this.loading = false;
    });
  }

  edit(item) {
    this.editUser.setUser(item);
  }

}
