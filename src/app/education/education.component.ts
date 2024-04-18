import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Example',
      startDate: 'September 2018',
      endDate: 'May 2022',
      description: 'Graduated with honors, focusing on software development and machine learning.',
    },
    {
      degree: 'Associate of Arts in Mathematics',
      institution: 'Community College',
      startDate: 'August 2016',
      endDate: 'May 2018',
      description: 'Strong foundation in calculus and linear algebra.',
    },
    {
      degree: 'Master of Business Administration',
      institution: 'Business School',
      startDate: 'August 2012',
      endDate: 'May 2016',
      description: 'Specialized in finance and strategic management.',
    },
    {
      degree: 'Bachelor of Arts in English Literature',
      institution: 'University of Literature',
      startDate: 'August 2008',
      endDate: 'May 2012',
      description: 'Studied various literary works and critical theories.',
    }
  ];
}
