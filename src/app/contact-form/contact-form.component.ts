import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contactMethods = [
    {id:1,name:"priya"},
    {id:2,name:"krishna"}
  ]
log(x: any){
  console.log(x)
}

submit(f){
  console.log(f)
}

}
