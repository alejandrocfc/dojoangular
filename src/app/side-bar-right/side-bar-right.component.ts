import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditUserService} from '../edit-user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.scss']
})
export class SideBarRightComponent implements OnInit {

  @Input() msj;
  @Output() chgMsj = new EventEmitter();

  user;
  Form: FormGroup;

  constructor(public formBuild: FormBuilder, public userService: EditUserService) {
    this.Form = formBuild.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cargo: ['', Validators.required],
      usuarioRed: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.userInfo.subscribe(user => this.Form.patchValue(user) );
  }

  click() {
    this.chgMsj.emit('I`m inevitable');
  }

  onSubmit() {
    console.log(this.Form.value);
  }

}
