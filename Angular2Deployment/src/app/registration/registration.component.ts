import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { RegistrationService } from "./registration.service";

@Component({
    selector: "registration",
    templateUrl: "./registration.component.html"
})

export class RegistrationComponent implements OnInit{

private firstName:any; 
private lastName:any;
public formSubmitted=false;

userForm:FormGroup;

constructor(private _formBuilder:FormBuilder, private _registrationService:RegistrationService){}

ngOnInit(){
    this.userForm=this._formBuilder.group({
        fname:[null,Validators.required],
        lname:[null,Validators.required]
    })
}

regFormSubmit(){
    let formValue=this.userForm.value;
    this.formSubmitted=this._registrationService.storeRegistrationData(formValue.fname,formValue.lname);
    if(this.formSubmitted){
        this.firstName=this._registrationService.fname;
        this.lastName=this._registrationService.lname;
    }
}

}