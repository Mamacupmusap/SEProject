export interface Petinfo{
    _id?:string;
    PetName?: string;
    PetBreed?: string;
    PetGender?: string; 
    Type?: string;
    PetPicUrl?: string;
    DelPicURL?: string;
    PetStatus?:string;
    PetLength?: number;
    PetHeight?: number;
    PetCerURL?: string;
    TimeStampUpdate?:Date;
    UserId?: string;
    AdopUserId?: string;
    CheckCode?: string;
    CodePet?:string;
    TimeUpdate?:Date;
    Describe?:string;
    PetAddress?:string;
}