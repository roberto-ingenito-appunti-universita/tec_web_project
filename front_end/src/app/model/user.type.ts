export interface User {
    username: string,
    password: string,
    firstName: string | null,
    lastName: string | null,
    createdAt: Date,
}