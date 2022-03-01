/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-25 16:07:17
 * @LastEditTime: 2022-03-01 10:36:50
 * @LastEditors: PhilRandWu
 */

import { pokerCard, colors, value, Card, joker, poker } from "./constraint";

export function createCard(): pokerCard {
    const pokerCards: pokerCard = [];
    const colorArr = Object.values(colors);
    const valueArr = Object.values(value);
    for (const v of valueArr) {
        for (const c of colorArr) {
            pokerCards.push({
                value: v,
                color: c,
                getString() {
                    return this.color + this.value
                }
            } as poker)
        }
    }
    // 添加大小王
    let jokerCard: joker = {
        type: 'big',
        getString() {
            return 'Joker';
        }
    }
    pokerCards.push(jokerCard);
    jokerCard = {
        type: 'small',
        getString() {
            return 'joker';
        }
    }
    pokerCards.push(jokerCard);
    return pokerCards;
}


export function printCard(poker: pokerCard):void {
    let result = '\n';
    poker.forEach(item => {
        result += item.getString();
    })
    console.log(result + '\t');
}
