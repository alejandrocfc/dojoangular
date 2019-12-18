import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.scss']
})
export class SideBarRightComponent implements OnInit {

  @Input() msj;
  @Output() chgMsj = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click(){
    this.chgMsj.emit('I`m inevitable');
  }

}
