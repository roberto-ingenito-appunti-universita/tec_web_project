export interface HomePageIdea {
    id: number,
    title: string,
    description: string,
    createdAt: Date,
    userFK: string,
    up_vote_quantity: number,
    down_vote_quantity: number,
    comment_quantity: number,
    is_up_vote: boolean | null,
}