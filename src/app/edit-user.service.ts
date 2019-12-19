import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  private data = new BehaviorSubject<any>('');
  userInfo = this.data.asObservable();

  setUser(user) {
    this.data.next(user);
  }

}
