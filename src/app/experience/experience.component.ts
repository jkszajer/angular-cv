// experience.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experienceData = [
    {
      jobTitle: 'Senior Software Engineer',
      company: 'XYZ Corp',
      startDate: 'January 2018',
      endDate: 'Present',
      jobDescription: 'Developing awesome software products.'
    },
    {
      jobTitle: 'Software Engineer',
      company: 'ABC Inc',
      startDate: 'January 2015',
      endDate: 'December 2017',
      jobDescription: 'Worked on several software projects.'
    },
    {
      jobTitle: 'Frontend Developer',
      company: 'DEF Corp',
      startDate: 'February 2013',
      endDate: 'December 2014',
      jobDescription: 'Built user interfaces for web applications.'
    },
    {
      jobTitle: 'Backend Developer',
      company: 'GHI Ltd',
      startDate: 'March 2010',
      endDate: 'January 2013',
      jobDescription: 'Developed server-side logic for web applications.'
    }
  ];
}