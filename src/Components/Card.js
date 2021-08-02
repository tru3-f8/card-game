import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function Card() {
  const [card, setCard] = useState([]);
  const CARD_VALUE_MAP = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
    ACE: 14,
  };

  const deckOfCards = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';

    const response = await axios.get(url);
    const data = await response.data;
    const result = data.cards.map((card) => ({
      cardImage: card.image,
      cardValue: card.value,
    }));

    return result;
  };

  const startGame = () => {
    deckOfCards().then((card) => {
      setCard(card);
    });
  };

  const isWinner = CARD_VALUE_MAP[card[0]?.cardValue] < CARD_VALUE_MAP[card[1]?.cardValue]

  const isLoser = CARD_VALUE_MAP[card[0]?.cardValue] > CARD_VALUE_MAP[card[1]?.cardValue]


  return (
    <CardContainer>
      <CardDealerName>Dealer</CardDealerName>
      <CardDealer src={card[0]?.cardImage} alt='Dealer'/>

      {isWinner ? (<CardWinner>You Win!</CardWinner>) : (isLoser ? (<CardLoser>You lose!</CardLoser>) : (<CardTie>It's a tie!</CardTie>))}

      <CardPlayer src={card[1]?.cardImage} alt='Player'/>
      <CardPlayerName>Player</CardPlayerName>

      <CardButtonContainer>
        <CardButton variant="contained" color="primary" onClick={startGame}>Primary</CardButton>
      </CardButtonContainer>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CardDealer = styled.img``;

const CardDealerName = styled.h3``;

const CardPlayer = styled.img``;

const CardPlayerName = styled.h3``;

const CardWinner = styled.h1`
  color: green;

  box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, .3);
  transition: all 250ms cubic-bezier(0, 0, 0, 0) 0s;

  &:hover {

  box-shadow: rgba(0, 0, 0, .8) 0px 40px 58px -16px,
  rgba(0, 0, 0, .72) 0px 30px 22px -10px;
  transform: scale(5.00);
}
`;

const CardLoser = styled.h1`
  color: red;
`;

const CardTie = styled.h1`
  color: grey;
`;

const CardButtonContainer = styled.div`
  margin-top: 35px;
`;

const CardButton = styled(Button)``;
