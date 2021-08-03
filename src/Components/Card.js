import React, { useState } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components'
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

console.log(card)

  return (
    <CardContainer>
      {card[0] ? '' : <h1>Are you ready to play?</h1>}

      {card[0] ? <CardDealerName>Dealer</CardDealerName> : '' }
      {card[0] ? <CardDealer src={card[0]?.cardImage} alt='Dealer'/> : '' }

      {isWinner ? (<CardWinner>YOU WIN!</CardWinner>) : (isLoser ? (<CardLoser>YOU LOSE!</CardLoser>) : (card[0] ? (<CardTie>DRAW</CardTie>) : ''))}

      {card[1] ? <CardPlayer src={card[1]?.cardImage} alt='Player'/> : '' }
      {card[1] ? <CardPlayerName>Player</CardPlayerName> : '' }

      <CardButtonContainer>
        <CardButton variant="contained" color="primary" onClick={startGame}>Let's Go!</CardButton>
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
  /* background-size: cover;
  background-image: url('https://images.pexels.com/photos/7471612/pexels-photo-7471612.jpeg?cs=srgb&dl=pexels-kuldeep-7471612.jpg&fm=jpg'); */
`;

const BackgroundImage = styled.img`
  height: 55%;
  width: 50%;
  object-fit: cover;
`;

const CardDealer = styled.img``;

const CardDealerName = styled.h3``;

const CardPlayer = styled.img``;

const CardPlayerName = styled.h3``;

const Result = keyframes`
  /* 100% { transform: scale(6.00); } */
`;

const CardWinner = styled.h1`
  color: green;
  transition: all 250ms cubic-bezier(0, 0, 0, 0) 0s;
  animation-name: ${Result}; 
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const CardLoser = styled.h1`
  color: red;
  transition: all 250ms cubic-bezier(0, 0, 0, 0) 0s;
  animation-name: ${Result}; 
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const CardTie = styled.h1`
  color: grey;
  transition: all 250ms cubic-bezier(0, 0, 0, 0) 0s;
  animation-name: ${Result}; 
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const CardButtonContainer = styled.div`
  margin-top: 35px;
`;

const CardButton = styled(Button)``;
