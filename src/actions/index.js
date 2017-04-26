import {
  SET_FIRST,
  SET_LAST,
  SET_CERTIFIED
} from '../reducers/general';

import {
  SET_PARTICIPATION,
  DEL_PARTICIPATION,
  ADD_IN_SCHOOL,
  DEL_IN_SCHOOL,
  ADD_OUT_SCHOOL,
  DEL_OUT_SCHOOL
} from '../reducers/service';

import {
  ADD_ACTIVITY,
  DEL_ACTIVITY,
  ADD_SPONSOR,
  DEL_SPONSOR
} from '../reducers/leadership';

export const setFirst = (name) => {
  return {
    type: SET_FIRST,
    payload: name
  };
};

export const setLast = (name) => {
  return {
    type: SET_LAST,
    payload: name
  };
};

export const setCertified = (certified) => {
  return {
    type: SET_CERTIFIED,
    payload: certified
  };
};

export const setParticipation = (grade, desc) => {
  return {
    type: SET_PARTICIPATION,
    payload: { grade, desc }
  };
};

export const delParticipation = (grade) => {
  return {
    type: DEL_PARTICIPATION,
    payload: grade
  };
};

export const addInSchool = (hours, desc) => {
  return {
    type: ADD_IN_SCHOOL,
    payload: { hours, desc }
  };
};

export const delInSchool = (id) => {
  return {
    type: DEL_IN_SCHOOL,
    payload: id
  };
};

export const addOutSchool = (hours, desc) => {
  return {
    type: ADD_OUT_SCHOOL,
    payload: { hours, desc }
  };
};

export const delOutSchool = (id) => {
  return {
    type: DEL_OUT_SCHOOL,
    payload: id
  };
};

export const addActivity = (desc) => {
  return {
    type: ADD_ACTIVITY,
    payload: desc
  };
};

export const delActivity = (id) => {
  return {
    type: DEL_ACTIVITY,
    payload: id
  };
};

export const addSponsor = (desc) => {
  return {
    type: ADD_SPONSOR,
    payload: desc
  };
};

export const delSponsor = (id) => {
  return {
    type: DEL_SPONSOR,
    payload: id
  };
};