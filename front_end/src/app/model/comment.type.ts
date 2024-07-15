export interface Comment {
    id: number,
    text: string,
    createdAt: Date,
    userFK: string,
    ideaFK: number,
}