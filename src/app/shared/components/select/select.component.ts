import { Component, computed, ElementRef, Input, model, Renderer2, signal } from '@angular/core';

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
  constructor(
    private renderer: Renderer2,
    private element: ElementRef<HTMLSelectElement>
  ) {

  }

  // #region class
  private _class = signal<string|null>(null);

  @Input({ alias: 'class' })
  public set class(value: string|null) {
    this._class.set(value);
  }
  
  public get class(): string|null {
    return this._class();
  }

  protected classComputed = computed(() => {
    return `form-select ${this._class()}`;
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
  private _name = signal<string|null>(null);

  @Input({ alias: 'name' })
  public set name(value: string|null) {
    this._name.set(value);
  }
  
  public get name(): string|null {
    return this._name();
  }

  protected nameComputed = computed(() => {
    return this._name();
  });
  // #endregion  

  // #region type
  public get type(): 'select' {
    return 'select'; 
  }
  // #endregion
}
