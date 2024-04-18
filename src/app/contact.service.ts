// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  sendMessage(messageContent: any) {
    console.log('Message content: ', messageContent);
    return this.http.post('http://localhost:8080/sendMessage', messageContent, { headers: { 'Content-Type': 'application/json' }});
  }
}