import React, { Component } from 'react';
import List from './List';
import './App.css'

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  // default props create a fallback if a parent forgets to pass a prop to a child
  //class component to use default props


  render() {
    const { store } = this.props
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
            />
          ))}
          {/* <List /> */}
        </div>
      </main>
    );
  }
}

export default App;