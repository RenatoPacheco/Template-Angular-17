import { Component } from '@angular/core';

@Component({
  selector: 'button[app-btn-secondary]',
  standalone: true,
  imports: [],
  host: {
    'class': 'btn btn-secondary'
  },
  templateUrl: './btn-secondary.component.html',
  styleUrl: './btn-secondary.component.scss'
})
export class BtnSecondaryComponent {

}
