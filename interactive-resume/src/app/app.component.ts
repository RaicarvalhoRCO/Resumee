import { Component } from '@angular/core';
import { Router, RouterModule , ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AboutMeComponent } from "./about-me/about-me.component";
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, ExperienceComponent, EducationComponent, SkillsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('expand', [
      state('void', style({ height: '0', opacity: '0', overflow: 'hidden' })),
      state('*', style({ height: '*', opacity: '1', overflow: 'hidden' })),
      transition('void <=> *', animate('300ms ease-in-out')) 
    ])
  ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  activeSection: string = 'about';
  currentLanguage: string = 'en';

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private titleService: Title) {
    this.router.events.subscribe(() => {
      const url = this.router.url; 
      this.activeSection = url.split('/')[1] || 'about';
    });
  }

  selectSection(section: string) {
    this.activeSection = section;
    this.router.navigate([`/${section}`]);
  }

}