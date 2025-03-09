import { FormType } from "../types";

export interface IFormElement {
    get id(): string;
    get name(): string|null;
    get type(): FormType;
}
