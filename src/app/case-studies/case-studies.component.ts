import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css'
})
export class CaseStudiesComponent {
  caseStudies = [
    {
      title: 'Ligula tristique quis risus',
      description: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '14 Apr 2021',
      category: 'Coding'
    },
    {
      title: 'Nullam id dolor elit id',
      description: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '29 Mar 2021',
      category: 'Workspace'
    },
    {
      title: 'Ultricies fusce porta elit',
      description: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '26 Feb 2021',
      category: 'Meeting'
    },
    {
      title: 'Morbi leo risus porta ',
      description: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.',
      date: '7 Jan 2021',
      category: 'Business Tips'
    }
  ];

}
