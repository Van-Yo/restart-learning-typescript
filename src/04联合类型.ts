/**
 * 联合类型（Union Types）表示取值可以为多种类型中的一种。
*/
let myFavouriteThing : (string|number);
myFavouriteThing = 'vanlus';
myFavouriteThing = 18;

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候,
// 我们只能访问此联合类型的所有类型里共有的属性或方法：
// 下面number和string类型只有toString和valueOf的方法,所以不能用其他的
function getLength(data:(string|number)):string{
    return data.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length); // 编译时报错
