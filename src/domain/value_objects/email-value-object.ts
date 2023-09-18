import { ValueObject } from "./value-object";

export class Email implements ValueObject<string> {
    _value: string = "Email";

    constructor(name: string) {
        this._value = name;
    }

    isEqualTo = (object: Email) => object.get() === this._value;

    get () { return this._value };
}