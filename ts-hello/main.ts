import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

import { LikeComponent } from './like.component'
let component = new LikeComponent(8, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);


// export class Point{
//     constructor(private x?: number, private y?: number){

//     }
//     draw(){
//         console.log("X: " + this.x, " Y: " + this.y)
//     }
// }

// let log = function (message) {
//     console.log(message);
// }

// let doLog = (message) => {
//     console.log(message)
// }

// //SAME AS

// let do1 = (message) => console.log(message)

// //SAME AS

// let do2 = message => console.log(message)

// class Point {
//     private _x: number;
//     private _y: number;

//     constructor(_x?: number, _y?: number){
//         this._x = _x;
//         this._y = _y;
//     }
//     get x(){
//        return this._x; 
//     }
//     set x(value){
//         if(value<0)
//         throw new Error("Value should be greater than zero!");
//         this.x = value;
        
//     }
//     draw() {
//         console.log("X: " + this._x + ", Y: " + this._y)  
//     }
// }

// let point = new Point();
// let x = point.x;
// point.x = 12;
// point.x = 2;
// point.y = 5;

// point.draw();


// let drawPoint = (point: Point) => {
//     //......
// }  

// let drawDistance = (pointA: Point, pointB: Point){
//     //........
// }

// drawPoint({
//     x: 1,
//     y: 2
// })


// function log(message){
//     console.log(message);
// }

// var message = "Hello Krishnapriya!";

// log(message);

// function doSomething(){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     console.log("Finally:" + i);
// }

// doSomething();

// let a: number;
// a = 1;
// // a = "Krishnapriya";
// // a = true;

// let b;
// b = "krishna";

// let name1 = (<string> b).endsWith('a');

// let name2 = (b as string).endsWith('a');

// let c: boolean;
// let d: any;
// let e: number[] = [1,2,3,4];
// let f: any[] = [1,"kp",true];

// const colorRed = 1;
// const colorGreen = 2;
// const colorBlue = 3;

// enum color{Red = 0, Green = 1, Blue = 2}
// let backgroundColor = color.Red;