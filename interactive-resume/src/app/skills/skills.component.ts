import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: { name: string, icon: string }[] = [
    { name: 'Angular', icon: '/icons/angular.png' },
    { name: 'JavaScript', icon: '/icons/js.png' },
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'Node.js', icon: '/icons/node-js.png' },
    { name: 'HTML5', icon: '/icons/HTML.png' },
    { name: 'CSS3', icon: '/icons/css.png' },
    { name: 'React.js', icon: '/icons/react.png' },
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'Jira', icon: '/icons/jira.png' },
    { name: 'Slack', icon: '/icons/slack.png' },
    { name: 'Figma', icon: '/icons/figma.png' }
  ];
}