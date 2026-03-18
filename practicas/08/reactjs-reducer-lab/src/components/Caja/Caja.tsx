import React, { useReducer, useEffect } from 'react';

type State = {
  posX: number;
  posY: number;
};

const initialState: State = {
  posX: (window.innerWidth / 2) - 50,
  posY: (window.innerHeight / 2) - 50
};

function reducer(state: State, action: { type: string }): State {
  switch(action.type) {
    case 'ArrowLeft':
      return { ...state, posX: state.posX - 10 };
    case 'ArrowRight':
      return { ...state, posX: state.posX + 10 };
    case 'ArrowUp':
      return { ...state, posY: state.posY - 10 };
    case 'ArrowDown':
      return { ...state, posY: state.posY + 10 };
    default:
      return state;
  }
}

const Caja = () => {
  const [coords, dispatch] = useReducer(reducer, initialState);

  const dispatchAction = (e: KeyboardEvent) => {
    dispatch({ type: e.key });
  };

  useEffect(() => {
    window.addEventListener('keydown', dispatchAction);
    return () => window.removeEventListener('keydown', dispatchAction);
  }, []);

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'darkred',
        position: 'absolute',
        left: `${coords.posX}px`,
        top: `${coords.posY}px`
      }}
    />
  );
};

export default Caja;