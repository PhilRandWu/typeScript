/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-02-17 10:52:18
 * @LastEditTime: 2022-02-25 10:44:26
 * @LastEditors: PhilRandWu
 */
type colors = "♥️" | "♠️" | "♣️" | "♦️";

type poke = {
  value: number;
  color: colors;
};

type pokeCard = poke[];

const pokeArr: pokeCard = [];

function createPoke(): pokeCard {
  const pokes: pokeCard = [];
  for (let i = 0; i < 13; i++) {
    pokes.push({
      value: i,
      color: "♠️",
    });
    pokes.push({
      value: i,
      color: "♣️",
    });
    pokes.push({
      value: i,
      color: "♥️",
    });
    pokes.push({
      value: i,
      color: "♦️",
    });
  }
  return pokes;
}

function printPoke(pokes: pokeCard): void {
  const result = "\n";
  pokes.forEach((item) => {
    let str = item.color;
    if (item.value <= 10) {
      str += item.value;
    } else if (item.value === 11) {
      str += "J";
    } else if (item.value === 12) {
      str += "Q";
    } else if (item.value === 13) {
      str += "K";
    }
    result + str + '\t';
  });
  console.log(result);
}

const pokeCards = createPoke();
printPoke(pokeCards);
