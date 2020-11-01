export interface chat{
    _id?:string;
    message?: string;
    picUser?: string;
    ownerName?: string;
    createAt?: Date;
    ownerId?: string;
    roomId?: string;
}

export interface chatroom{
    _id?:string;
    userid1?: string;
    userid2?: string;
    username1?: string;
    username2?: string;
}