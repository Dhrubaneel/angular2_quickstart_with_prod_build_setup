import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { RegistrationComponent } from "./registration.component";
import { RegistrationService } from "./registration.service";

@NgModule({
  imports:      [ CommonModule, ReactiveFormsModule ],
  declarations: [ RegistrationComponent ],
  providers: [ RegistrationService ],
  exports: [RegistrationComponent]
})

export class RegistrationModule{

}