import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  @ViewChild('formTemplate') signUpForm :NgForm
  userName:string ='';
  emailId:string='';
  gender ='male';
  user ={
    userName : '',
    emailId : '',
    gender : ''
  }
  isSubmitted : boolean = false;

  onFormSubmit(){
    console.log(this.signUpForm);
    this.isSubmitted = true;
    this.user.userName = this.signUpForm.value.userData.userName;
    this.user.emailId = this.signUpForm.value.userData.emailId;
    this.user.gender = this.signUpForm.value.gender;
    this.signUpForm.reset();
  }
  checkData(){
    console.log(this.signUpForm);
  }

  fillData(){
    this.signUpForm.form.setValue({
      userData :{
        emailId:'raudra@gmail.com',
        userName :'Raudra'
      },
      gender: 'male'
    })

  }

  fillPartialData(){
    this.signUpForm.form.patchValue({
      userData :{
        emailId:'raudra@gmail.com',
        userName :'Raudra'
      }
    })
   
  }
}
