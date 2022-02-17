/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-15 20:32:48
 * @LastEditTime: 2022-02-17 10:27:20
 * @LastEditors: PhilRandWu
 */

let say: string = "hello";

console.log("hehe！！！");
function add(a: number, b: number) {
  return a + b;
}

const num: number = add(1, 2);
console.log(num);

let a: null = null;

let x: "1";
x = "1"; // x 只能取 1

let gender: "男" | "女";
gender = "男";

let arr: []; // arr 只能是空数组

arr = [];

let user: {
  name: string;
  age: number;
};


type Gender = '男' | '女';

type User = {
    name: string
    age: number
    gender: Gender
}

let u: User = {
  name: 'hehe',
  age: 20,
  gender: '男'
}




function getUser(): User[] {
  return [];
}


function sum (a: number, b: number):number;
function sum(a: string, b: string):string;
function sum (a: number | string, b: number | string): number | string {
  if(typeof a === 'number' && typeof b === 'number') {
    return a * b;
  } else if(typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  throw new Error('Invalid');
}

const result = sum('1', '2');



function addNum(a: number, b: number, c?: number): number {
  if(c) {
    return a + b + c;
  }
  return a + b;
}

console.log(addNum(1,2,3))
console.log(addNum(1, 2))
