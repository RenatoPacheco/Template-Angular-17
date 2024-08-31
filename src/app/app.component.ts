import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BtnPrimaryComponent } from './shared/components/btn-primary/btn-primary.component';
import { BtnSecundaryComponent } from './shared/components/btn-secundary/btn-secundary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BtnPrimaryComponent, 
    BtnSecundaryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Template-Angular-17';
}
