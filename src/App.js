import React, { Component } from 'react';
import List from './List';
import './App.css'
import STORE from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
 state =   {
   store: STORE,
 };
  // default props create a fallback if a parent forgets to pass a prop to a child
  //class component to use default props

  

  handleButtonAdd = (listId) => {
    console.log('handle button clicked!')
    const newCard = newRandomCard();
    
    const newLists = this.state.store.lists.map(list=> {
      if(list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  }

  handleButtonDelete = (cardId) => {
    console.log('delete button clicked!')
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  }

  render() {
  const { store }  = this.state
    console.log(store)
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => ( // you can name the variable whatever you want
            <List // this is what we're rendering
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])} // This tells the list which cards will be in it.
              handleButtonAdd={this.handleButtonAdd}
              handleButtonDelete={this.handleButtonDelete}
            />
          ))}
          
        </div>
        ...
      </main>
    );
  }
}

export default App;