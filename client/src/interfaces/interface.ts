export interface User {
    id: number;
    userName: string;
    email: string;
    name: string;
    password:string,
    avatar?: string;
    banner?: string;
    bio?: string;
    follows?: { userId: number; created_at: string }[];
    friends?: { userId: number; add_at: string }[];
    groups?: any[]; 
    created_at: string;
  }
  