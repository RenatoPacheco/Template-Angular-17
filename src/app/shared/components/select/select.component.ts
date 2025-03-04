import { Component, computed, model } from '@angular/core';

import { Guid } from 'guid-typescript';

@Component({
  selector: 'select[app-select]',
  standalone: true,
  imports: [],
  host: {
    '[class]': 'classComputed()',
    '[id]': 'idComputed()'
  },
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  // #region class
  
    public classModel = model('', {
      alias: 'class'
    });
  
    protected classComputed = computed(() => {
      return `form-select ${this.classModel()}`;
    });
  
    public get class(): string {
      return this.classModel();
    }
  
    public set class(value: string) {
      this.classModel.set(value);
    }
  
    // #endregion
  
  // #region id

  public idModel = model<string>(`${Guid.create()}`, {
    alias: 'id'
  });

  protected idComputed = computed<string>(() => {
    return `${this.idModel()}`;
  });

  public get id(): string {
    return this.idModel(); 
  }

  public set id(value: string) {
    this.idModel.set(value);
  }

  // #endregion
}
