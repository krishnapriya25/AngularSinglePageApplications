import { CoursesService } from './course/courses.service';
import { Component } from '@angular/core';
@Component({
    selector:'courses',
    template:`
    {{ text | summary:10 }} <br/>
    {{course.title | uppercase | lowercase }}<br/>
    {{course.students | number }}<br/>
    {{course.rating | number:'1.1-2'}}<br/>
    {{course.price | currency:'INR':true:'2.4-4' }}<br/>
    {{course.releaseDate | date:'full'}}<br/>
    <h2>{{"Title: " + getTitle()}}<h2>

    <ul>
        <li *ngFor = "let course of courses">
        {{ course }}
        </li>
    </ul>
    <table>
    <tr>
    <td [attr.colspan] = "colSpan">

    </td>
    </tr>
    </table>
    <button class = "btn btn-primary" [class.active] = "isActive">Save</button>
    
    <button [style.backgroundColor] = "isActive? 'blue' : 'white' " >Style</button>
    <div (click) = "onDivClicked()">
    <button (click) = "onClick($event)">Check</button>

    <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()"/>
    </div>
    `
})


export class CoursesComponent{
    text = `Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. Teh monks were not to blame, in any case, he reflceted, on the steps. And if they are decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have.`
    course = {
        title: "Angular Course",
        rating: 4.9562,
        students:65465,
        price:52,
        releaseDate: new Date('2020,11,30')
    }
    email = "me@example.com"
    onKeyUp(){
        console.log(this.email);
        // if($event.keyCode === 13)
        // console.log("Enter Key was pressed!!")
        // console.log($event.target.value)
        
    }

    onClick($event){
       
        console.log("Button was clicked!",event)
        $event.stopPropagation();
     
    }
    onDivClicked(){
        
        console.log("Div was clicked!!!")
    }
    isActive = true;
    title = "List of Courses!!";
    courses;
    colSpan = 2;
    constructor(service: CoursesService){
        // let service = new CoursesService();
        this.courses = service.getCourses();
    }

    getTitle(){
        return this.title
    }
}