import { Component, computed, ElementRef, Input, model, Renderer2, signal } from '@angular/core';
import { Guid } from 'guid-typescript';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { IFormElement } from '../../interfaces';

type ForType = InputComponent | SelectComponent | TextareaComponent;

@Component({
  selector: 'label[app-label]',
  standalone: true,
  imports: [],
  host: {
    '[class]': 'classComputed()',
    '[for]': 'forComputed()',
    '[id]': 'idComputed()'
  },
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss'
})
export class LabelComponent {
  constructor(
    private renderer: Renderer2,
    private element: ElementRef<HTMLLabelElement>
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
    let classType = 'form-label';
    if (this._for()?.type === 'checkbox' || this._for()?.type === 'radio') {
      classType = 'form-check-label';
    } else if (this._for()?.type === 'select') {
      classType = 'form-select-label';
    }
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

  // #region for
  private _for = signal<IFormElement|null>(null);

  @Input({ alias: 'for' })
  public set for(value: IFormElement|null) {
    this._for.set(value);
  }
  
  public get for(): IFormElement|null {
    return this._for();
  }    

  protected forComputed = computed<string|null>(() => {
    return this._for()?.id ?? null;
  });
  // #endregion
}
