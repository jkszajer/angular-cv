import { Component } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  color: string = '#491f74'; 

  constructor(private colorService: ColorService) { }

  changeColor() {
    this.colorService.changeColor(this.color);
  }
}