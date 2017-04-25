export const ADD_ACTIVITY = 'LEA_ADD_ACTIVITY';
export const DEL_ACTIVITY = 'LEA_DEL_ACTIVITY';
export const ADD_SPONSOR = 'LEA_ADD_SPONSOR';
export const DEL_SPONSOR = 'LEA_DEL_SPONSOR';

const INITIAL = {
  activities: [],
  sponsors: []
};

const reducerList = (state = [], action) => {
  switch(action.type) {
    case ADD_ACTIVITY:
    case ADD_SPONSOR:
      const ids = state.map(obj => obj.id);
      const max = Math.max(...ids, -1);
      return [...state, { id: max + 1, desc: action.payload }];
    case DEL_ACTIVITY:
    case DEL_SPONSOR:
      return state.filter(obj => obj.id != action.payload);
    default:
      return state;
  }
}

export const reducerLeadership = (state = INITIAL, action) => {  
  switch(action.type) {
    case ADD_ACTIVITY:
    case DEL_ACTIVITY:
      return {
        activities: reducerList(state.activities, action),
        sponsors: state.sponsors
      };
    case ADD_SPONSOR:
    case DEL_SPONSOR:
      return {
        activities: state.activities,
        sponsors: reducerList(state.sponsors, action)
      };
    default:
      return state;
  }
}