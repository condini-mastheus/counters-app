import Immutable from 'seamless-immutable';

export const Types = {
  CREATE_NEW_COUNTER: 'counters/NEW_COUNTER',
  REMOVE_CURRENT_COUNTER: 'counters/REMOVE_CURRENT_COUNTER',
  ADD_COUNTER: 'counter/ADD_COUNTER',
  SUBTRACT_COUNTER: 'counter/SUBTRACT_COUNTER',
  SELECT_COUNTER: 'counter/SELECT_COUNTER',
};

const INITIAL_STATE = Immutable({
  data: [
    {
      id: Math.random()
        .toString(36)
        .substr(2, 4),
      counter: Math.round(Math.random() * 10),
    },
    {
      id: Math.random()
        .toString(36)
        .substr(2, 4),
      counter: Math.round(Math.random() * 10),
    },
  ],
  current: {},
});

export default function Counters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_NEW_COUNTER:
      const newCounter = {
        id: Math.random()
          .toString(36)
          .substr(2, 5),
        counter: 0,
      };

      return {
        data: [newCounter, ...state.data],
        current: newCounter,
      };
    case Types.REMOVE_CURRENT_COUNTER:
      return {
        data: state.data.filter(counter => counter.id !== action.payload.id),
        current: {},
      };
    case Types.ADD_COUNTER:
      return {
        current: {
          id: state.current.id,
          counter: state.current.counter + 1,
        },
        data: state.data.map((counter) => {
          if (counter.id === state.current.id) {
            return {
              id: state.current.id,
              counter: state.current.counter + 1,
            };
          }

          return counter;
        }),
      };
    case Types.SUBTRACT_COUNTER:
      return {
        current: {
          id: state.current.id,
          counter: state.current.counter - 1,
        },
        data: state.data.map((counter) => {
          if (counter.id === state.current.id) {
            return {
              id: state.current.id,
              counter: state.current.counter - 1,
            };
          }

          return counter;
        }),
      };
    case Types.SELECT_COUNTER:
      return {
        ...state,
        current: action.payload.counter,
      };
    default:
      return state;
  }
}

export const Creators = {
  createNewCounter: () => ({
    type: Types.CREATE_NEW_COUNTER,
    payload: {},
  }),
  removeCurrentCounter: id => ({
    type: Types.REMOVE_CURRENT_COUNTER,
    payload: { id },
  }),
  addCounter: () => ({
    type: Types.ADD_COUNTER,
    payload: {},
  }),
  subtractCounter: () => ({
    type: Types.SUBTRACT_COUNTER,
    payload: {},
  }),
  selectCounter: counter => ({
    type: Types.SELECT_COUNTER,
    payload: { counter },
  }),
};
