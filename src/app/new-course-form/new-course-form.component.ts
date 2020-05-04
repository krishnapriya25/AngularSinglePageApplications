import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
  categories = [
    {id:1, name:"priya"},
    {id:2, name:'krishna'},
    {id:3, name:'bharath gandham'}
  ]

  constructor() { 

  }
  submit(course){
    console.log(course)
}
  ngOnInit(): void {
  }

}
