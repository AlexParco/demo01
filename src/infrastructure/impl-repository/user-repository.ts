import { Injectable } from "@nestjs/common";
import { User } from "src/domain/models/user";
import { Iuser_repository } from "src/domain/repository/user-repository";
import { Email } from "../../domain/value_objects/email-value-object";
import { Password } from "../../domain/value_objects/password-value-object";

@Injectable()
export class UserRepository implements Iuser_repository {

    findByEmail (email: string): User {
        
        return email === "alex" ? {
            email: new Email("alex"),
            password: new Password("123")
        } : null;
    };
}