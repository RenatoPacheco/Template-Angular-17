import { Component, computed, model } from '@angular/core';
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
  
    // #region class    
    public classModel = model('', {
      alias: 'class'
    });
  
    protected classComputed = computed(() => {
      let classType = 'form-label';
      if (this.forModel()?.type === 'checkbox' || this.forModel()?.type === 'radio') {
        classType = 'form-check-label';
      } else if (this.forModel()?.type === 'select') {
        classType = 'form-select-label';
      }
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

    // #region for  
    public forModel = model.required<IFormElement>({
      alias: 'for'
    });
  
    protected forComputed = computed<string>(() => {
      return this.forModel()?.id;
    });
  
    public get for(): IFormElement {
      return this.forModel(); 
    }
  
    public set for(value: IFormElement) {
      this.forModel.set(value);
    }  
    // #endregion
  }
