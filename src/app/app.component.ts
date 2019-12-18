import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dojoangular';
  msj = 'Msj from parent';
  changeMsj(msj: string) {
    this.msj = msj;
  }
}
