import { Component } from '@angular/core';
import { Router, RouterModule , ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AboutMeComponent } from "./about-me/about-me.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component"; // Importe as animações

@Component({
  selector: 'app-root',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [CommonModule, AboutMeComponent, ExperienceComponent, EducationComponent, SkillsComponent, RouterModule ], // Adicione o CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // Defina a animação aqui
    trigger('expand', [
      state('void', style({ height: '0', opacity: '0', overflow: 'hidden' })), // Estado inicial (colapsado)
      state('*', style({ height: '*', opacity: '1', overflow: 'hidden' })), // Estado expandido
      transition('void <=> *', animate('300ms ease-in-out')) // Animação de transição
    ])
  ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  activeSection: string = 'about'; // Define a aba ativa inicial

  constructor(private router: Router, private route: ActivatedRoute) {
    // Observa mudanças na URL e atualiza a aba ativa
    this.router.events.subscribe(() => {
      const url = this.router.url; // Obtém a URL atual
      this.activeSection = url.split('/')[1] || 'about'; // Extrai o nome da rota
    });
  }

  selectSection(section: string) {
    this.activeSection = section; // Atualiza a aba ativa
    this.router.navigate([`/${section}`]); // Navega para a rota correspondente
  }
}