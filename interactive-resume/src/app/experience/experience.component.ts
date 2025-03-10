import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Front-End developer',
      company: 'Freelance',
      period: 'May 2024 - Present',
      description: 'Responsible for designing and implementing newfeatures and maintaining existing code',
      skills: ['Angular', 'TypeScript', 'HTML5/CSS3', 'JavaScript', 'Node.js', 'Git', 'Figma']
    },
    {
      title: 'Product Owner',
      company: 'InEvent',
      period: 'May 2024 - November 2024',
      description: 'Responsible for translating the voice of customers within the organization and delivering maximum value in product development.',
      skills: ['PHP', 'Jira', 'Figma', 'Slack']
    },
    {
      title: 'Systems analyst and developer',
      company: 'KYGA Consultancy',
      period: 'June 2022 - April 2024',
      description: ' Conduct detailed testing and precise documentation of Ariba system APIs, ensuring all integrations and functionalities align with corporate standards.',
      skills: ['JavaScript', 'ABAP', 'ERP-SAP', 'Ariba - Buying', 'Ariba - Sourcing','Ariba - SLP',]
    },
    {
      title: 'IT Support and Computer Network Analyst',
      company: 'Company Z',
      period: 'December 2020 - May 2022',
      description: 'Responsible for providing first-level support to employees (Windows/Office), analyzing and managing computer networks (intranet), and delivering specialized support for TASY and TOTVS systems',
      skills: ['TASY', 'TOTVS', 'Office', 'Hardware maintenance']
    }
  ];
}