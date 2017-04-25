export const SET_PARTICIPATION = 'SET_PARTICIPATION';
export const DEL_PARTICIPATION = 'DEL_PARTICIPATION';
export const ADD_IN_SCHOOL = 'ADD_IN_SCHOOL';
export const DEL_IN_SCHOOL = 'DEL_IN_SCHOOL';
export const ADD_OUT_SCHOOL = 'ADD_OUT_SCHOOL';
export const DEL_OUT_SCHOOL = 'DEL_OUT_SCHOOL';

const INITIAL = {
  participation: [null, null, null],
  inSchool: [],
  outSchool: []
}

const reducerParticipation = (state = INITIAL.participation, action) => {
  switch(action.type) {
    case SET_PARTICIPATION: {
      let p = [...state];
      p[action.payload.grade - 9] = action.payload.desc;
      return p;
    }
    case DEL_PARTICIPATION: {
      let p = [...state];
      p[action.payload - 9] = null;
      return p;
    }
    default:
      return state;
  }
}

const reducerList = (state = [], action) => {
  switch(action.type) {
    case ADD_IN_SCHOOL:
    case ADD_OUT_SCHOOL:
      const ids = state.map(obj => obj.id);
      const max = Math.max(...ids);
      return [...state, { id: max + 1, hours: action.payload.hours, desc: action.payload.desc }];
    case DEL_IN_SCHOOL:
    case DEL_OUT_SCHOOL:
      return state.filter(obj => obj.id != action.payload);
    default:
      return state;
  }
}

export const reducerService = (state = INITIAL, action) => {
  switch(action.type) {
    case SET_PARTICIPATION:
    case DEL_PARTICIPATION:
      return {
        participation: reducerParticipation(state.participation, action),
        inSchool: state.inSchool,
        outSchool: state.outSchool
      };
    case ADD_IN_SCHOOL:
    case DEL_IN_SCHOOL:
      return {
        participation: state.participation,
        inSchool: reducerList(state.inSchool, action),
        outSchool: state.outSchool
      };
    case ADD_OUT_SCHOOL:
    case DEL_OUT_SCHOOL:
      return {
        participation: state.participation,
        inSchool: state.inSchool,
        outSchool: reducerList(state.outSchool, action)
      };
    default:
      return state;
  }
}