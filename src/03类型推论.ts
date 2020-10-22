/**
 * 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
*/


// 以下代码虽然没有指定类型，但是会在编译的时候报错：
// let myBoyName = 'vanlus';
// myBoyName = 123;


// 上面代码等价于
let myBoyName : string = 'vanlus';
// myBoyName = 123;

// 能推论的就让他自己推论，不能的则自己定义