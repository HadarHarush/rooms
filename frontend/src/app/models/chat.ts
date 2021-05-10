export interface Msg {
  _id: string;
  from: {
    _id: string;
    username: string;
    profileImgUrl: string;
  };
  txt: string;
  createdAt: number;
}

export interface Chat {
  _id: string;
  type: string;
  msgs: Msg[];
  members: string[];
  name: string;
  imgUrl: string;
  createdAt: number;
}
