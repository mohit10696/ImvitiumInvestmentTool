import { UserModel } from "./user.model";

export interface LoginModel{
    token:string,
    token_type:string,
    expires_in:number,
    email:string,
    register:UserModel
}