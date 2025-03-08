import { Component, computed, Input, input, model, signal } from '@angular/core';

import { Guid } from 'guid-typescript';
import { IFormElement } from '../../interfaces';
import { InputType } from '../../types';

@Component({
  selector: 'input[app-input]',
  standalone: true,
  imports: [],
  host: {
    '[class]': 'classComputed()',
    '[type]': 'typeComputed()',
    '[name]': 'nameComputed()',
    '[id]': 'idComputed()'
  },
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements IFormElement {

  // #region class
  private _class = signal<string>('');

  @Input({ alias: 'class' })
  public set class(value: string) {
    this._class.set(value);
  }
  
  public get class(): string {
    return this._class();
  }

  protected classComputed = computed(() => {
    const classType = this.classList[this.typeComputed()];
    return `${classType} ${this._class()}`;
  });
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

  // #region type
  private _type = signal<InputType>('text');

  @Input({ alias: 'type', required: true })
  public set type(value: InputType) {
    this._type.set(value);
  }
  
  public get type(): InputType {
    return this._type();
  }

  protected typeComputed = computed(() => {
    return this._type();
  });
  // #endregion

  private classList: Record<InputType, string> = {
    'text': 'form-control',
    'password': 'form-control',
    'email': 'form-control',
    'number': 'form-control',
    'tel': 'form-control',
    'url': 'form-control',
    'search': 'form-control',
    'date': 'form-control',
    'datetime-local': 'form-control',
    'month': 'form-control',
    'week': 'form-control',
    'time': 'form-control',
    'color': 'form-control form-control-color',
    'file': 'form-control',
    'range': 'form-range',
    'checkbox': 'form-check-input',
    'radio': 'form-check-input',
    'hidden': '', // Não precisa de classe específica
    'submit': 'btn btn-primary',
    'reset': 'btn btn-secondary',
    'button': 'btn btn-secondary',
    'image': 'btn' // Pode variar, dependendo do uso
  };
}
