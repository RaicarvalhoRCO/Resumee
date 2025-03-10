import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [
    {
      title: 'Bachelor of Computer Science',
      school: 'UNIFESP – Universidade Federal de São Paulo',
      period: 'Januray 2016 - June 2018',
    },
    {
      title: 'Bachelor Degree in Database',
      school: 'FAM - Centro Universitário',
      period: 'January 2024 - Present',
    }
  ];
}