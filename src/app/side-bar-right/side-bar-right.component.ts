import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditUserService} from '../edit-user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceMainService} from '../service-main.service';

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.scss']
})
export class SideBarRightComponent implements OnInit {

  @Input() msj;
  @Output() chgMsj = new EventEmitter();

  user;
  id;
  Form: FormGroup;

  constructor(public formBuild: FormBuilder, public userService: EditUserService, public http: ServiceMainService) {
    this.Form = formBuild.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cargo: ['', Validators.required],
      usuarioRed: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.Form.patchValue(user);
      this.id = user.identificacion;
    });
  }

  click() {
    this.chgMsj.emit('I`m inevitable');
  }

  onSubmit() {
    const info = Object.assign({}, this.Form.value);
    if (this.id) {
      info.identificacion = this.id;
      this.http.updateData(info).subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
    } else {
      info.identificacion = 1222332;
      info.fechaRegistro = new Date().getTime();
      this.http.save(info).subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
    }
  }

}
