import { Email } from "../value_objects/email-value-object";
import { Password } from "../value_objects/password-value-object";

export class User {
    public email: Email;
    public password: Password;

    constructor(_email: string, _password: string) {
        this.email = new Email(_email)
        this.password = new Password(_password)
    }
}