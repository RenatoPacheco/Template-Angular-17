import { Component, computed, ElementRef, Input, input, Renderer2, signal } from '@angular/core';
import { NgIf } from '@angular/common';

type ThemeType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'transparent';
type ActionType = 'edit' | 'save' | 'delete' | 'new' | 'reset' | 'preview' | 'log' | 'go-back' | 'enable' | 'disable';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [NgIf],
  host: {
    '[class]' : 'classComputed()',
    '[type]' : 'computedType()',
    '[title]' : 'titleComputed()'
  },
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  constructor(
    private renderer: Renderer2,
    private element: ElementRef<HTMLButtonElement>
  ) {

  }

  // #region theme
  private _theme = signal<ActionType|ThemeType>('primary');

  @Input({ alias: 'theme' })
  public set theme(value: ActionType|ThemeType) {
    this._theme.set(value);
  }
  
  public get theme(): ActionType|ThemeType {
    return this._theme();
  }
  // #endregion

  // #region title
  private _title = signal<string|null>(null);

  @Input({ alias: 'title' })
  public set title(value: string|null) {
    this._title.set(value);
  }
  
  public get title(): string|null {
    return this._title();
  }

  public titleComputed = computed(() => {
    if (this._title()) {
      return this._title();
    }

    return this.titles.hasOwnProperty(this._theme())
      ? this.titles[this._theme() as ActionType] : '';
  });
  // #endregion

  // #region text
  private _text = signal<string|null>(null);

  @Input({ alias: 'text' })
  public set text(value: string|null) {
    this._text.set(value);
  }
  
  public get text(): string|null {
    return this._text();
  }
  
  public textComputed = computed(() => {
    if (this._text()) {
      return this._text();
    }

    return this.texts.hasOwnProperty(this._theme())
      ? this.texts[this._theme() as ActionType] : '';
  });
  // #endregion

  // #region class
  private _class = signal<string|null>(null);

  @Input({ alias: 'class' })
  public set class(value: string|null) {
    this._class.set(value);
  }
  
  public get class(): string|null {
    return this._class();
  }
  
  public classComputed = computed(() => {
    if(this.inputInDropdown()) {
      return `dropdown-item ${this._class()}`;
    }

    let result = `${this.themes[this._theme()]} ${this._class()}`;

    if (this._class()) {
      result = `${result} ${this._class()}`;
    }

    return result;
  });
  // #endregion

  // #region type
  private _type = signal<'submit'|'reset'|'button'>('button');

  @Input({ alias: 'type' })
  public set type(value: 'submit'|'reset'|'button') {
    this._type.set(value);
  }
  
  public get type(): 'submit'|'reset'|'button' {
    return this._type();
  }

  public computedType = computed(() => {
    return this._type();
  });
  // #endregion

  // #region textClass
  private _textClass = signal<string|null>('');

  @Input({ alias: 'text-class' })
  public set textClass(value: string|null) {
    this._textClass.set(value);
  }
  
  public get textClass(): string|null {
    return this._textClass();
  }

  public textClassComputed = computed(() => {
    return this._textClass();
  });
  // #endregion

  // #region icon
  private _icon = signal<string|null>(null);

  @Input({ alias: 'icon' })
  public set icon(value: string|null) {
    this._icon.set(value);
  }
  
  public get icon(): string|null {
    return this._icon();
  }

  public iconComputed = computed(() => {
    if (this._icon()) {
      return this._icon();
    }

    return this.icons.hasOwnProperty(this._theme())
      ? this.icons[this._theme() as ActionType] : null;
  });
  // #endregion

  public inputInDropdown = input(false, {
    alias: 'in-dropdown'
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