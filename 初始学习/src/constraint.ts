/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-25 16:06:24
 * @LastEditTime: 2022-03-01 10:25:22
 * @LastEditors: PhilRandWu
 */
export enum colors {
  heart = "♥",
  spade = "♠",
  club = "♣",
  diamond = "♦",
}
export enum value {
  one = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  eleven = "J",
  twelve = "Q",
  thirteen = "K",
}

export interface Card {
    getString(): string
}

export interface poker extends Card {
  value: value;
  color: colors;
}

export interface joker extends Card {
  type: "big" | "small";
}

export type pokerCard = Card[];
