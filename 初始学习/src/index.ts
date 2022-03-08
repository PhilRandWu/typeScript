/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-17 10:52:18
 * @LastEditTime: 2022-03-08 11:05:57
 * @LastEditors: PhilRandWu
 */

import { Poker } from "./poker";


const pokers = new Poker();
pokers.shuffle();
pokers.printCard();



console.log('发牌');
const playerArr = pokers.publish();
console.log(playerArr);
playerArr[0].printCard();
playerArr[1].printCard();
playerArr[2].printCard();
playerArr[3].printCard();
playerArr[3].shuffle();
