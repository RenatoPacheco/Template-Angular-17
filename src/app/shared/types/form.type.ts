import { InputType } from "zlib";
import { ButtonType } from "./button.type";

export type FormType = InputType | ButtonType | 'select' | 'textarea' | 'fieldset' | 'legend' | 'label' | 'option' | 'form' | 'fieldset' | 'legend';