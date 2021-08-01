import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
  const [card, setCard] = useState([]);


  console.log(card)


  const deckOfCards = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';

    const response = await axios.get(url);
    const data = await response.data;
    const result = data.cards.map((card) => ({ cardImage: card.image, cardValue: card.value }));


    return result;
  };
                                                             

  const player = () => {
    deckOfCards().then((card) => {
      setCard(card);
    });
                                                                        

    if (card[0] > card[1]) {
      console.log('you win');
    } else {
      console.log('you lose');
    }
  };
  



  return (
    <div>
      <img src={card[0]?.cardImage} />
      <h1>{card[0]?.cardValue}</h1>
      <img src={card[1]?.cardImage} />
      <h1>{card[1]?.cardValue}</h1>
      <button onClick={player}>Button</button>
    </div>
  );
}

export default Card;
