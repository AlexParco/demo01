import { User } from "../models/user";

export interface Iuser_repository {
    findByEmail: (email: string) => User;
}

