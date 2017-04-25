export const GEN_SET_FIRST = 'GEN_SET_FIRST';
export const GEN_SET_LAST = 'GEN_SET_LAST';
export const GEN_SET_CERTIFIED = 'GEN_SET_CERTIFIED';

const INITIAL = {
  name: {
    first: '',
    last: ''
  },
  certified: false
};

const reducerName = (state = INITIAL.name, action) => {
  switch(action.type) {
    case GEN_SET_FIRST:
      return { ...state, first: action.payload };
    case GEN_SET_LAST:
      return { ...state, last: action.payload };
    default:
      return state;
  }
}

export const reducerGeneral = (state = INITIAL, action) => {
  switch(action.type) {
    case GEN_SET_FIRST:
    case GEN_SET_LAST:
      return { ...state, name: reducerName(state.name, action) };
    case GEN_SET_CERTIFIED:
      return { ...state, certified: action.payload };
        default:
      return state;
  }
}