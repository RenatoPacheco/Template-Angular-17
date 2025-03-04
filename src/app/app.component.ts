import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonComponent, InputComponent, LabelComponent, SelectComponent, TextareaComponent } from './shared/components';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, InputComponent, LabelComponent, 
    SelectComponent, NgFor, TextareaComponent,
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'adm-teste';
}
