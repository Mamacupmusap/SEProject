/*export class Petinfo{
    _id?: string;
    petid?:string;
    PetName?: string;
    PetBreed?: string;
    PetGender?: string; 
    PetPicURL?: string;
    PetStatus?: string;
    PetWeight?: number;
    PetCerURL?: string;
    TimeStampUpdate?: Date;
    UserId?:string;
    AdopUserId?:string;
}*/

import { ThrowStatement } from "typescript";

export class Petinfo{
    _id?:string;
    petid?:string;
    PetName?: string;
    PetBreed?: string;
    PetGender?: string; 
    Type?: string;
    PetPicUrl?: string;
    PetStatus?:string;
    PetLength?: number;
    PetHeight?: number;
    PetCerURL?: string;
    TimeStampUpdate?:Date;
    UserId?: string;
    AdopUserId?: string;
    CheckCode?: string;
    CodePet?:string;
    accessToken?:string;
}




