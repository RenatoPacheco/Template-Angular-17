import { Component, input } from '@angular/core';

@Component({
  selector: 'button[app-btn-primary]',
  standalone: true,
  imports: [],
  host: {
    '[title]': 'title()',
    'class': 'btn btn-primary'
  },
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {

  title = input('', {
    transform: (value: string | null) => {
      console.log("Valor alterado...");
      return value?.toUpperCase();
    }
  });

}
