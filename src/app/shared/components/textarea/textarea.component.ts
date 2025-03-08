import { Component, computed, Input, model, signal } from '@angular/core';
import { Guid } from 'guid-typescript';
import { IFormElement } from '../../interfaces';
import { transformToNumber } from '../../helpers/transform.helper';

@Component({
  selector: 'textarea[app-textarea]',
  standalone: true,
  imports: [],
  host: {
    '[class]': 'classComputed()',
    '[id]': 'idComputed()',
    '[name]': 'nameComputed()',
    '[rows]': 'rowsComputed()'
  },
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent implements IFormElement {

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
  private _id = signal<string>(`${Guid.create()}`);

  @Input({ alias: 'id' })
  public set id(value: string) {
    this._id.set(value);
  }
  
  public get id(): string {
    return this._id();
  }

  protected idComputed = computed(() => {
    return this._id();
  });
  // #endregion

  // #region name
  private _name = signal<string>('');

  @Input({ alias: 'name' })
  public set name(value: string) {
    this._name.set(value);
  }
  
  public get name(): string {
    return this._name();
  }

  protected nameComputed = computed(() => {
    return this._name();
  });
  // #endregion

  // #region rows
  private _rows = signal<number>(5);

  @Input({ 
    alias: 'rows', 
    transform: (value: string|number) => transformToNumber(value) 
  })
  public set rows(value: number) {
    this._rows.set(value);
  }
  
  public get rows(): number {
    return this._rows();
  }

  protected rowsComputed = computed(() => {
    return this._rows();
  });
  // #endregion

  // #region type
  public get type(): 'textarea' {
    return 'textarea'; 
  }
  // #endregion
}
