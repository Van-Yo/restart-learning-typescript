/**
 * 「类型 + 方括号」表示法
*/
let myList : number [] = [1,2,3];

/**
 * 数组泛型
*/
let newList : Array<string> = ['1','2','3'];

/**
 * 接口表示数组（不常用）
*/
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];