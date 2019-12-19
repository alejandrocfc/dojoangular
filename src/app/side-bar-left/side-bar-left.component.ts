import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.scss']
})
export class SideBarLeftComponent implements OnInit {

  @Output() chMsj = new EventEmitter();

  menu: Array<object> = [{name: 'Inicio', path: '/home'}, {name: 'Menú 1', path: '/menu1'}, {name: 'Menú 2', path: '/menu2'}];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  click() {
    this.chMsj.emit('Hello from another child');
  }

  getOption(path) {
    this.chMsj.emit(`Route active ${path}`);
    this.router.navigateByUrl(path);
  }

}
