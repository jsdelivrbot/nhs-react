export const SET_FIRST = 'SET_FIRST';
export const SET_LAST = 'SET_LAST';
export const SET_CERTIFIED = 'SET_CERTIFIED';

const INITIAL = {
  name: {
    first: '',
    last: ''
  },
  certified: false
};

const reducerName = (state = INITIAL.name, action) => {
  switch(action.type) {
    case SET_FIRST:
      return { ...state, first: action.payload };
    case SET_LAST:
      return { ...state, last: action.payload };
    default:
      return state;
  }
}

export const reducerGeneral = (state = INITIAL, action) => {
  switch(action.type) {
    case SET_FIRST:
    case SET_LAST:
      return { ...state, name: reducerName(state.name, action) };
    case SET_CERTIFIED:
      return { ...state, certified: action.payload };
        default:
      return state;
  }
}