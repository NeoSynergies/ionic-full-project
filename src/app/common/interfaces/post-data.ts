import { User } from "./user";

export interface PostData {
    id: string;
    image: string;
    title: string;
    description: string;
    userId: string;
    userData: User;
}