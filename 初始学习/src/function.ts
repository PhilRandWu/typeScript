/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-25 16:07:17
 * @LastEditTime: 2022-02-25 16:10:57
 * @LastEditors: PhilRandWu
 */

import { pokerCard, colors, value } from "./constraint";

export function createCard(): pokerCard {
    const pokerCards: pokerCard = [];
    const colorArr = Object.values(colors);
    const valueArr = Object.values(value);
    for (const v of valueArr) {
        for (const c of colorArr) {
            pokerCards.push({
                value: v,
                color: c
            })
        }
    }
    return pokerCards;
}


export function printCard(poker: pokerCard):void {
    poker.forEach(item => {
        console.log(item.color + item.value);
    })
}
