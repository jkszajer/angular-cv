import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  constructor(private translateService: TranslateService) { 
    
  }
  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
