import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent  {

    isFormSubmited: boolean = false;
  
  userObj: any = {
    firstname: '',
    lastname: '',
    username: '',
    city: '',
    state: '',
    zipcode: '',
    isAggree: false,
    studentId:'',
    dob:''
  };

  onSubmit(form:NgForm) {
    debugger;
    const isFormVAlid = form.form.valid;
    this.isFormSubmited = true; 
  
  if (form.form.valid) {
    console.log(form.form.value)
  }  
  }
}
