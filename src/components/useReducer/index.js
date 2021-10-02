import React, { useReducer } from 'react';
import history from '../../utils/history';


const UseReducerImplementation = () => {

    const people = [
        { name: 'Jay', alive: true },
        { name: 'Kailee', alive: true },
        { name: 'John', alive: true },
        { name: 'Mia', alive: true }
    ];

    const init = [
        { name: 'Jay', alive: false },
        { name: 'Kailee', alive: false },
        { name: 'John', alive: false },
        { name: 'Mia', alive: false }
    ];

    const reducer = (people, action) => {
        if (action.type === 'chomp') {
            return people.map(person => {
                if (person.name === action.payload) {
                    person.alive = false;
                }
                return person;
            })
        }
        else if (action.type === 'revive') {
            return people.map(person => {
                if (person.name === action.payload) {
                    person.alive = true;
                }
                return person;
            })
        } else {
            return init
        }
    };

    const [state, dispatch] = useReducer(reducer, people)


    function devour(name) {
        dispatch({ type: 'chomp', payload: name });
    }

    function revive(name) {
        dispatch({ type: 'revive', payload: name });
    }

    return <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Use Reducer Implementation</h1>
        {state.map((person, idx) => (
            <div key={idx} style={{ display: 'flex', width: '50%', justifyContent: 'space-around' }}>
                <div>{person.name}</div>
                {person.alive ?
                    <div onClick={e => devour(person.name)}> ✨✨ ALIVE! ✨✨</div> :
                    <div onClick={e => revive(person.name)}> ☠ ☠ DEAD ☠ ☠</div>}
            </div>
        ))}

        <button type="button" onClick={e => dispatch({ type: 'reset', payload: init })}>Reset</button>
        
        <button type="button" style={{ margin: '30px 0px' }} onClick={e => history.push('/context/init')}>Use Context</button>
    </div>
}

export default UseReducerImplementation;