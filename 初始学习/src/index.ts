/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-17 10:52:18
 * @LastEditTime: 2022-02-25 11:22:39
 * @LastEditors: PhilRandWu
 */
enum colors {
    heart = '♥',
    spade = '♠',
    club = '♣',
    diamond = '♦'
}

enum value {
    one = 'A',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    eleven = 'J',
    twelve = 'Q',
    thirteen = 'K',
}

type poker = {
    value: value,
    color: colors
}

type pokerCard = poker[];


function createCard(): pokerCard {
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


function printCard(poker: pokerCard):void {
    poker.forEach(item => {
        console.log(item.color + item.value);
    })
}

const pokers = createCard();
printCard(pokers);
