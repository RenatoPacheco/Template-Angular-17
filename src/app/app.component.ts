import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { 
  BtnPrimaryComponent, 
  BtnSecondaryComponent 
} from '@app/shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BtnPrimaryComponent, 
    BtnSecondaryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Template-Angular-17';
}
