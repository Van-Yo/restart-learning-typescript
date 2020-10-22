/**
 * 函数定义的两种方式：函数声明和函数表达式
*/
// 1.函数声明
function sayMyName(){
    console.log('hello');
}

// 2.函数表达式
let sayMyAge = ()=>{
    console.log(18);
}

/**
 * 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到
 * 注意：输入多余的（或者少于要求的）参数，是不被允许的：
*/
function sum(num1:number,num2:number):number{
    return num1 + num2;
}
sum(1,2);

// 换做函数表达式可以这么写：
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义
// 而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
let mySum = function(num1:number,num2:number):number{
    return num1 + num2;
}

// 可选参数
// 用 ? 表示可选的参数，但是可选参数后面不允许再出现必需参数了
function addName(firstName:string,lastName?:string){
    if(lastName){
        return firstName + lastName;
    }else{
        return firstName;
    }
}


// 参数默认值
function getStuInfo(name:string,age:number,label:string = '汉族'){
    return `姓名：${name}，年龄：${age}，名族：${label}`;
}
getStuInfo('vanlus',18);


// 剩余参数
// 可以使用 ...rest 的方式获取函数中的剩余参数
// items 是一个数组。所以我们可以用数组的类型来定义它：
function push(array:number[],...items:number[]){
    items.forEach(item=>{
        array.push(item);
    })
    return array;
}
push([],1,2,3)


// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
// 输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}