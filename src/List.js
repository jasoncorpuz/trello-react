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
            id={card.id}
          />
        )}
        
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.handleButtonAdd(props.id)}
        >
          + Add Random Card
        </button>
        <button
          type='button'
          className='List-delete-button'
          onClick={props.handleButtonDelete}
        >
          - Delete Card
        </button>
      </div>
    </section>
  )
}

List.defaultProps = {
  onClickAdd: () => {},
}