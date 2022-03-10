/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-17 10:52:18
 * @LastEditTime: 2022-03-10 10:14:36
 * @LastEditors: PhilRandWu
 */

import { Dictionary } from "./Dictionary";

const dictionary = new Dictionary();
dictionary.set('name', 'John');
dictionary.set('age', 12);
dictionary.forEach((item, value) => {
    console.log(item,value)
})
console.log(dictionary);
console.log(dictionary.size)
console.log(dictionary.has('name'));
dictionary.delete('name');
console.log(dictionary);
console.log(dictionary.size);
