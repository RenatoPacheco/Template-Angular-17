import { FormType } from "../types";

export interface IFormElement {
    get id(): string;
    get name(): string;
    get type(): FormType;
}
