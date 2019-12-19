import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  private data = new BehaviorSubject<object>({});

  setUser(user) {
    this.data.next(user);
  }

  getUser() {
    return this.data.asObservable();
  }

}
