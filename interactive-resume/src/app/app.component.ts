import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, ExperienceComponent, EducationComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('expand', [
      state('void', style({ height: '0', opacity: '0', overflow: 'hidden' })), // Estado inicial (colapsado)
      state('*', style({ height: '*', opacity: '1', overflow: 'hidden' })), // Estado expandido
      transition('void <=> *', animate('300ms ease-in-out')) // Animação de transição
    ])
  ]
})
export class AppComponent {
  activeSection: string | null = null;
  title: any;

  selectSection(section: string) {
    if (this.activeSection === section) {
      this.activeSection = null; // Fecha a seção se já estiver aberta
    } else {
      this.activeSection = section; // Abre a seção clicada
    }
  }
}