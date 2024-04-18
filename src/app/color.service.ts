import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private colorSource = new BehaviorSubject('default color');
  currentColor = this.colorSource.asObservable();

  changeColor(color: string) {
    this.colorSource.next(color);
  }
}