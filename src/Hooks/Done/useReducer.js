import React, { useReducer } from 'react';

// Инициализация состояния и редуктора
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Reducer() {
    // Использование useReducer с начальным состоянием и редуктором
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Счетчик: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Увеличить</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Уменьшить</button>
        </div>
    );
}

export default Reducer;
