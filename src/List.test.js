import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import List from './List';
const card = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' }
];

describe('list', () => {
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List 
     cards ={card} />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected with cards array', () => {
    const tree = renderer
        .create(
            <section className="List">
                <header className="List-header">
                    <h2>header={'myHeader'}</h2>
                </header>
                <div className="List-cards">
                    <List cards={card} />
                    <button type="button" className="List-add-button">
                        + Add Random Card
                    </button>
                </div>
            </section>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
        });  
    });