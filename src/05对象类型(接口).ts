/**
 * 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
*/

// 赋值的时候，变量的形状必须和接口的形状保持一致。
interface Person {
    name : string;
    age : number;
}

let tom : Person = {
    name : 'vanlus',
    age : 18
}


// 可选属性:该属性可以不存在。
// 这时仍然不允许添加未定义的属性
interface Idog {
    name : string;
    age? : number
}

let dog : Idog = {
    name : 'JOKER'
}


// 任意属性：一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// 也就是说，下面定义了一个任意属性，并且属性值类型是string,那其他属性值也只能是string和其类型的子集
interface Icat {
    name : string;
    // age? : number;
    [propName : string] : string;
}

let cat : Icat = {
    name : 'HAHA',
}


// 只读属性readonly
interface Irabbit {
    readonly id : number;
    name : string;
    age? : number;
}

let rabbit : Irabbit = {
    id :123,
    name : 'HEIHEI'
}
// 无法修改
// rabbit.id = 223;


// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// let rabbit1 : Irabbit = {
//     name : 'xxx'
// }
// rabbit1.id = 345