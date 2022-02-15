export interface PostSocial {
    likes: number;
    comments: {
        id: string;
        userId: string;
        username: string;
        text: string;
    };
}