/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-15 20:32:48
 * @LastEditTime: 2022-02-16 19:44:47
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
