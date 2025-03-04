import { Component, computed, input, model } from '@angular/core';

import { Guid } from 'guid-typescript';

type InputType = 
  'text' | 'checkbox' | 'radio' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local'
  | 'month' | 'week' | 'time' | 'color' | 'file' | 'range' | 'hidden' | 'submit' | 'reset' | 'button' | 'image';


@Component({
  selector: 'input[app-input]',
  standalone: true,
  imports: [],
  host: {
    '[class]': 'classComputed()',
    '[type]': 'typeComputed()',
    '[id]': 'idComputed()'
  },
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  // #region class

  public classModel = model('', {
    alias: 'class'
  });

  protected classComputed = computed(() => {
    const classType = this.classList[this.typeModel()];
    return `${classType} ${this.classModel()}`;
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

  // #region type

  public typeModel = model.required<InputType>({
    alias: 'type'
  });

  protected typeComputed = computed<InputType>(() => {
    return `${this.typeModel()}`;
  });

  public get type(): InputType {
    return this.typeModel(); 
  }

  public set type(value: InputType) {
    this.typeModel.set(value);
  }

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
