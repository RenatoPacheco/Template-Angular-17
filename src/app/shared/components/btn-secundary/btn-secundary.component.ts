import { Component } from '@angular/core';

@Component({
  selector: 'button[app-btn-secundary]',
  standalone: true,
  imports: [],
  host: {
    'class': 'btn btn-secondary'
  },
  templateUrl: './btn-secundary.component.html',
  styleUrl: './btn-secundary.component.scss'
})
export class BtnSecundaryComponent {

}
