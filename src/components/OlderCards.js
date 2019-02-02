import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './Card.css';

const cards = [
  {
    image: 'https://i.imgur.com/54eKwIx.gif',
    title: 'Broken Myth: Ylva News Article Title',
    text: 'Short Description',
    height: '250px',
  },
  {
    image: 'https://i.imgur.com/2Jk9Nrh.png',
    title: 'Broken Myth: Anka News Article Title',
    text: 'Short Description',
    height: '250px',
  },
  {
    image: 'https://i.imgur.com/tgoxhWU.jpg',
    title: 'Fan Art/Meme: Enemies Of Our Nationhf',
    text: 'By: Maxman30',
    height: '250px',
  },
  {
    image: 'https://i.imgur.com/54eKwIx.gif',
    title: 'Broken Myth: Ylva News Article Titleytuj',
    text: 'Short Description',
    height: '250px',
  },
  // {
  //   image: 'https://i.imgur.com/2Jk9Nrh.png',
  //   title: 'Broken Myth: Anka News Article Titlerthjy',
  //   text: 'Short Description',
  //   height: '250px',
  //   width: '100px',
  // },
  // {
  //   image: 'https://i.imgur.com/tgoxhWU.jpg',
  //   title: 'Fan Art/Meme: Enemies Of Our Nationdhn',
  //   text: 'By: Maxman30',
  //   height: '250px',
  // },
  // {
  //   image: 'https://i.imgur.com/54eKwIx.gif',
  //   title: 'Broken Myth: Ylva News Article Titleb',
  //   text: 'Short Description',
  //   height: '250px',
  // },
  // {
  //   image: 'https://i.imgur.com/2Jk9Nrh.png',
  //   title: 'Broken Myth: Anka News Article Titlea',
  //   text: 'Short Description',
  //   height: '250px',
  // },
  // {
  //   image: 'https://i.imgur.com/tgoxhWU.jpg',
  //   title: 'Fan Art/Meme: Enemies Of Our Nationx',
  //   text: 'By: Maxman30',
  //   height: '250px',
  // },
];

export default () => (
  <CardDeck className="deck">
    {cards.map((card, index) => {
      return (
        <Card key={index}>
          <Card.Img variant="top" src={card.image} className="cardImage" />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      );
    })}
  </CardDeck>
);
