import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm:FormGroup
  isFormSubmitted: boolean = false

  constructor() { 
    this.userForm = new FormGroup({
      firstName: new FormControl("",[Validators.required,]),
      lastName: new FormControl("",[Validators.required,Validators.minLength(4)]),
      userName: new FormControl("",[Validators.required,Validators.email]),
      city: new FormControl(""),
      state: new FormControl(""),
      zipcode: new FormControl(""),
      isAgree : new FormControl(false, Validators.requiredTrue),
      dob : new FormControl("",[Validators.required]),
      grade: new FormControl("",[ Validators.required]),
      studentId: new FormControl("",[ Validators.required,Validators.pattern('^[0-9]*$')]),
    })
  }
  
  ngOnInit(): void {
  }

  onSubmit(){
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted = true;
    // this.userForm.markAllAsTouched();
    this.isFormSubmitted = true;
    if (this.userForm.valid) {
      // Handle form submission
      this.userForm.reset();
      console.log(this.userForm.value);
    }
  }

}
