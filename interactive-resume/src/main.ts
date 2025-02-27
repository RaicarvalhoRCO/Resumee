import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations'; // Para animações

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations() // Adicione suporte a animações
  ]
}).catch(err => console.error(err));