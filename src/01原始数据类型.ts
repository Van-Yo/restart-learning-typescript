/**
 * 原始数据类型包括：字符串，数值，布尔，null，undefined
*/

/**
 * 布尔值
*/
let isDone : boolean = false;
console.log(isDone);


/**
 * 数值
*/
let grade : number = 123;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;


/**
 * 字符串
*/
let studentName : string = 'vanlus'



/**
 * 空值
 * JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
*/
function sayName():void{
    console.log("没有返回值")
}



/**
 * Null 和 Undefined
 * 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
*/
let u: undefined = undefined;
let n: null = null;

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num : number = null

// 而 void 类型的变量不能赋值给 number 类型的变量：
// let u: void;
// let num: number = u;

// Type 'void' is not assignable to type 'number'.