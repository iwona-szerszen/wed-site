import callApi from '../util/apiCaller';

// Export Constants
export const ADD_DEDICATIONS = 'ADD_DEDICATIONS';
export const ADD_DEDICATION = 'ADD_DEDICATION';
export const EDIT_DEDICATION = 'EDIT_DEDICATION';
export const DELETE_DEDICATION = 'DELETE_DEDICATION';

// Export Actions
export function addDedications(dedications) {
  return {
    type: ADD_DEDICATIONS,
    dedications,
  };
}

export function fetchDedicationsRequest() {
  return dispatch => {
    return callApi('dedications').then(res => dispatch(addDedications(res)));
  };
}

export function addDedication(dedication) {
  return {
    type: ADD_DEDICATION,
    dedication,
  };
}

export function addDedicationRequest(dedication) {
  return dispatch => {
    return callApi('dedications', 'post', {
      dedication: {
        song: dedication.song,
        content: dedication.content,
      },
    }).then(res => dispatch(addDedication(res.dedication)));
  };
}

export function editDedication(id, dedication) {
  return {
    type: EDIT_DEDICATION,
    id,
    dedication,
  };
}

export function editDedicationRequest(id, dedication) {
  return dispatch => {
    return callApi(`dedications/${id}`, 'put', {
      dedication: {
        song: dedication.song,
        content: dedication.content,
      },
    }).then(res => dispatch(editDedication(id, res.dedication)));
  };
}

export function deleteDedication(id) {
  return {
    type: DELETE_DEDICATION,
    id,
  };
}

export function deleteDedicationRequest(id) {
  return dispatch => {
    return callApi(`dedications/${id}`, 'delete').then(() => dispatch(deleteDedication(id)));
  };
}


/*
export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function thumbUpPost(cuid, post) {
  return {
    type: THUMB_UP_POST,
    cuid,
    post,
  };
}

export function thumbUpPostRequest(cuid, post) {
  return (dispatch) => {
    return callApi(`posts/${cuid}/up`, 'put', {
      post: {
        voteCount: post.voteCount + 1,
      },
    }).then(() => dispatch(thumbUpPost(cuid, post)));
  };
}
*/