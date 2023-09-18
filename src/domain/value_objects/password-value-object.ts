import { ValueObject } from "./value-object";


export class Password implements ValueObject<string> {
    _value: string = "Password";

    constructor(name: string) {
        this._value = name;
    }

    isEqualTo = (object: Password) => object.get() === this._value;

    get () { return this._value };

}