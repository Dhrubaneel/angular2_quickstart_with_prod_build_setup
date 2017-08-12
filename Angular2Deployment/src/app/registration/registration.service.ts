import { Injectable } from "@angular/core";

@Injectable()
export class RegistrationService{
    public fname:any;
    public lname:any;

    storeRegistrationData(firstName:any,lastName:any){
        this.fname=firstName;
        this.lname=lastName;
        return true;
    }
}