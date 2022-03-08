import { Card, colors, joker, poker, pokerCard, value } from "./constraint";

/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-08 10:12:46
 * @LastEditTime: 2022-03-08 11:03:52
 * @LastEditors: PhilRandWu
 */
export class Poker {
  private cards: pokerCard = [];

  constructor(cards?: pokerCard) {
    if (cards) {
      this.cards = cards;
    } else {
        this.init();
    }
  }

  private init() {
    const colorArr = Object.values(colors);
    const valueArr = Object.values(value);
    for (const v of valueArr) {
      for (const c of colorArr) {
        this.cards.push({
          value: v,
          color: c,
          getString() {
            return this.color + this.value;
          },
        } as poker);
      }
    }
    // 添加大小王
    let jokerCard: joker = {
      type: "big",
      getString() {
        return "Joker";
      },
    };
    this.cards.push(jokerCard);
    jokerCard = {
      type: "small",
      getString() {
        return "joker";
      },
    };
    this.cards.push(jokerCard);
  }

  printCard(): void {
    let result = "\n";
    this.cards.forEach((item) => {
      result += item.getString();
    });
    console.log(result + "\t");
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      let randomIndex = random(0, this.cards.length - 1);
      const temp = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = temp;
    }
  }

  publish(): [Poker, Poker, Poker, Poker] {
    let Player1: Poker;
    let Player2: Poker;
    let Player3: Poker;
    let left: Poker;
    Player1 = this.takeCards(17);
    Player2 = this.takeCards(17);
    Player3 = this.takeCards(17);
    left = new Poker(this.cards);
    return [Player1, Player2, Player3, left];
  }

  private takeCards(number: number): Poker {
    const cards: pokerCard = [];
    for (let i = 0; i < number; i++) {
      cards.push(this.cards.shift() as Card);
    }
    return new Poker(cards);
  }
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
