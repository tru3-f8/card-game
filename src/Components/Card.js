import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
  const [card, setCard] = useState([]);
  const [cardsNumberSuits, setCardsNumberSuits] = useState();

  console.log(cardsNumberSuits);

  const deckOfCards = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';

    const response = await axios.get(url);
    const data = await response.data;
    const result = data.cards.map((card) => card.image);

    return result;
  };

  const cardsNumber = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';

    const response = await axios.get(url);
    const data = await response.data;
    const numberSuits = data.cards.map((card) => card.code);

    return numberSuits;
  };

  const player = () => {
    deckOfCards().then((card) => {
      setCard(card);
    });

    cardsNumber().then((numberSuits) => {
      numberSuits?.map((number) => setCardsNumberSuits(number));
    });

    console.log(card[0])
    console.log(card[1])

    if(card[0] > card[1]) {
        console.log('you win')
    } else {
        console.log('you lose')
    }

  
  };

  return (
    <div>
      <img src={card[0]} />
      <img src={card[1]} />
      <button onClick={player}>Button</button>
    </div>
  );
}

export default Card;
