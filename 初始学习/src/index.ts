/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-03 09:38:41
 * @LastEditTime: 2022-03-03 09:43:06
 * @LastEditors: PhilRandWu
 */
class User {
  readonly id: number;
  name: string;
  age: number;
  gender: "男" | "女" = "男";
  pid?: string;
  constructor(name: string, age: number) {
    this.id = Math.random();
    this.name = name;
    this.age = age;
  }
}
