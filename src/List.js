import React from 'react';
import Card from './Card';
import './List.css'

// props.header(string of a header) props.cards(title and content)



export default function List(props) { //function component 
  return (
    <section className='List'>
      <header className='List-header'> 
        <h2>{props.header}</h2> 
      </header>
      <div className='List-cards'>
        {props.cards.map((card) => // receives 'cards' from App
          <Card // THIS IS WHAT WERE RENDERING, for each card generate: 
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}
        
        <button
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
}