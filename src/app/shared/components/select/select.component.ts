import { Component, computed, model } from '@angular/core';

import { Guid } from 'guid-typescript';
import { IFormElement } from '../../interfaces';

@Component({
  selector: 'select[app-select]',
  standalone: true,
  imports: [],
  host: {
    '[class]': 'classComputed()',
    '[name]': 'nameComputed()',
    '[id]': 'idComputed()'
  },
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements IFormElement {

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

  // #region name
  public nameModel = model<string>('', {
    alias: 'name'
  });

  protected nameComputed = computed<string>(() => {
    return `${this.nameModel()}`;
  });

  public get name(): string {
    return this.nameModel(); 
  }

  public set name(value: string) {
    this.nameModel.set(value);
  }  
  // #endregion  

  // #region type
  public get type(): 'select' {
    return 'select'; 
  }
  // #endregion
}
