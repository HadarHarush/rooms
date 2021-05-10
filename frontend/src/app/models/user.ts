export interface User {
  _id: string;
  username: string;
  profileImgUrl: string;
  mail: string;
  status: string;
  chats: string[];
  createdAt: number;
}

export interface MiniUser {
  _id: string;
  username: string;
  profileImgUrl: string;
}
