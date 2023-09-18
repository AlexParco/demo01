import { Email } from "../value_objects/email-value-object";
import { Password } from "../value_objects/password-value-object";

export interface User {
    email: Email;
    password: Password;
}
