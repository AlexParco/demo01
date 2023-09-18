import { Token } from "../models/token";
import { User } from "../models/user";

export interface Itoken_repository {
    create: (user: User) => Token;
    validate: (token: string) => boolean;
    delete: (token: string) => boolean;
}

