import { Injectable } from "@nestjs/common";
import { User } from "src/domain/models/user";
import { Iuser_repository } from "src/domain/repository/user-repository";
import { Email } from "../../domain/value_objects/email-value-object";
import { Password } from "../../domain/value_objects/password-value-object";
import { Itoken_repository } from "src/domain/repository/token-repostiory";
import { Token } from "src/domain/models/token";

@Injectable()
export class TokenRepository implements Itoken_repository {
    create (user: User): Token  {
        return {
            token: "jwt_123"
        }
    };

    validate (token: string): boolean  {
        return token === "jwt_123"
    };

    delete (token: string): boolean {
        return true
    };

}