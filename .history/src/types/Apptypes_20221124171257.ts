export enum AppUrls  {
    NETWORK = "/groups",
    CREATEGROUP = "/create-group",
    
}

export enum LanguageEnum {
    IT =  "it",
    EN = "en"
}

export const languages : LanguageEnum = LanguageEnum.IT;

export type Label = {
     en:string;
     it: string;
    
}

export type ModalLabels = {
    login: string;
    register: string;
}

export enum ModalContentEnum {
    LOGIN = "Login",
    REGISTER = "Register"
}











