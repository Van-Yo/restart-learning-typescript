/**
 * 如果是 any 类型，则允许被赋值为任意类型
*/
let anyC : any = 123;
anyC = 'vanlus';
anyC = true;


/**
 * 变量如果在声明的时候，未指定其类型，并且没有赋值，那么它会被识别为任意值类型：
*/
let something;
something = 'hello';
something = 123;

// 但是变量如果在声明的时候，未指定其类型，但是有赋值，那么它会被识别为最初赋值类型（类型推论）