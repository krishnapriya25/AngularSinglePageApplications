import { Point } from './main';

let point = new Point(2,3);
point.draw();

//For this code execution
// While using features like Arrow functions, string methods we need to explicitly mention target as es6 as they are new JavaScript features available in that version but then we get problem with modules while using es6 version. For modules we can specify to use commonjs .

// The following commands tells typescript compiler to use commonjs for modules and target es6 version then we get the code transpiled  into JavaScript accordingly.

// tsc --target es6 --module commonjs main.ts | node main.js