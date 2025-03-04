import { Component, computed, ElementRef, input, Renderer2 } from '@angular/core';
import { NgIf } from '@angular/common';

type ThemeType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'transparent';
type ActionType = 'edit' | 'save' | 'delete' | 'new' | 'reset' | 'preview' | 'log' | 'go-back' | 'enable' | 'disable';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [NgIf],
  host: {
    '[class]' : 'computedClass()',
    '[type]' : 'computedType()',
    '[title]' : 'computedTitle()'
  },
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {

  }

  public inputTheme = input.required<ActionType|ThemeType>({
    alias: 'theme'
  });

  public inputText = input('', {
    alias: 'text'
  });

  public inputTextClass = input('', {
    alias: 'text-class'
  });

  public inputTitle = input('', {
    alias: 'title'
  });

  public inputIcon = input('', {
    alias: 'icon'
  });

  public inputClass = input('', {
    alias: 'class'
  });

  public inputType = input<'submit'|'reset'|'button'>('button', {
    alias: 'type'
  });

  public inputInDropdown = input(false, {
    alias: 'in-dropdown'
  });


  public computedText = computed(() => {
    if (this.inputText()) {
      return this.inputText();
    }

    return this.texts.hasOwnProperty(this.inputTheme())
      ? this.texts[this.inputTheme() as ActionType] : '';
  });

  public computedTextClass = computed(() => {
    return this.inputTextClass();
  });

  public computedTitle = computed(() => {
    if (this.inputTitle()) {
      return this.inputTitle();
    }

    return this.titles.hasOwnProperty(this.inputTheme())
      ? this.titles[this.inputTheme() as ActionType] : '';
  });

  public computedIcon = computed(() => {
    if (this.inputIcon()) {
      return this.inputIcon();
    }

    return this.icons.hasOwnProperty(this.inputTheme())
      ? this.icons[this.inputTheme() as ActionType] : '';
  });

  public computedClass = computed(() => {
    if(this.inputInDropdown()) {
      return `dropdown-item ${this.inputClass()}`;
    }

    let result = `${this.themes[this.inputTheme()]} ${this.inputClass()}`;

    if (this.inputClass()) {
      result = `${result} ${this.inputClass()}`;
    }

    return result;
  });

  public computedType = computed(() => {
    return this.inputType() ?? '';
  });

  private titles: Record<ActionType, string> = {
    'edit': 'clique aqui para editar',
    'save': 'clique aqui para salvar',
    'delete': 'clique aqui para excluir',
    'new': 'clique aqui para criar novo',
    'reset': 'clique aqui para limpar',
    'preview': 'clique aqui para visualizar',
    'log': 'clique aqui para acsar o log',
    'go-back': 'clique aqui para voltar',
    'enable': 'clique aqui para habilitar',
    'disable': 'clique aqui para desabilitar'
  };

  private texts: Record<ActionType, string> = {
    'edit': 'Editar',
    'save': 'Salvar',
    'delete': 'Deletar',
    'new': 'Novo',
    'reset': 'Limpar',
    'preview': 'Visualizar',
    'log': 'Log',
    'go-back': 'Voltar',
    'enable': 'Habilitar',
    'disable': 'Desabilitar'
  };

  private icons: Record<ActionType, string> = {
    'edit': 'fa fa-edit',
    'save': 'fa fa-save',
    'delete': 'fa fa-trash',
    'new': 'fa fa-plus',
    'reset': 'fa fa-trash',
    'preview': 'fa fa-file',
    'log': 'fa fa-briefcase',
    'go-back': 'fa fa-reply',
    'enable': 'fa fa-eye',
    'disable': 'fa fa-eye-slash'
  };

  private themes: Record<ActionType|ThemeType, string> = {
    'edit': 'btn btn-outline-primary',
    'save': 'btn btn-outline-primary',
    'delete': 'btn btn-outline-danger',
    'new': 'btn btn-outline-info',
    'reset': 'btn btn-outline-warning',
    'preview': 'btn btn-outline-info',
    'log': 'btn btn-outline-primary',
    'go-back': 'btn btn-outline-dark',
    'enable': 'btn btn-outline-success',
    'disable': 'btn btn-outline-warning',
    'primary': 'btn btn-outline-primary',
    'secondary': 'btn btn-outline-secondary',
    'success': 'btn btn-outline-success',
    'danger': 'btn btn-outline-danger',
    'warning': 'btn btn-outline-warning',
    'info': 'btn btn-outline-info',
    'light': 'btn btn-outline-light',
    'dark': 'btn btn-outline-dark',
    'link': 'btn btn-outline-link',
    'transparent': 'btn btn-outline-transparent'
  };
}