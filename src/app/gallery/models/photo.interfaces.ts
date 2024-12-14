import { Timestamp } from "@angular/fire/firestore";

export interface Photo{
    id: number;
    title: string;
    description: string;
    url: string;
    created: Timestamp;
}