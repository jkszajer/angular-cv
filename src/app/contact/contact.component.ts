import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ContactService } from '../contact.service';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  name = '';
  message = '';
  currentColor: string ='#491f74';

  @ViewChild('submitButton') submitButton?: MatButton;

  constructor(private contactService: ContactService,
    private colorService: ColorService,
    private cdr: ChangeDetectorRef) {this.colorService.currentColor.subscribe(color => {
      this.currentColor = color;
    }); }

  onSubmit() {
    this.contactService.sendMessage({ name: this.name, message: this.message }).subscribe();
  }

  ngOnInit() {
    // leave this empty
  }

  ngAfterViewInit() {
    this.colorService.currentColor.subscribe(color => {
      this.currentColor = color;
    });
  }
}