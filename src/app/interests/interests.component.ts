import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interestsData = [
    {
      "name": "Programming",
      "description": "Passionate about developing innovative software solutions and keeping up with the latest technology trends."
    },
    {
      "name": "Books",
      "description": "Avid reader with a strong interest in both fiction and non-fiction literature, always seeking to expand knowledge and perspectives."
    },
    {
      "name": "Travelling",
      "description": "Enjoys exploring new cultures and destinations, gaining a broader understanding of the world through travel."
    },
    {
      "name": "Music",
      "description": "Music enthusiast with a diverse taste, appreciating various genres and often attending live concerts and festivals."
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }
}