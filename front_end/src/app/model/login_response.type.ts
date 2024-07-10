import { User } from "./user.type";

export interface LoginResponse {
    token: string,
    user: User,
}