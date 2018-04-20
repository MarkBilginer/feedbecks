import {ADD_TO_FORMID} from '../actions/formid-actions';

const initialState = {
  formId: [
    {
      formId: ''
    }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FORMID:
      {
        return {
          ...state,
          formId: [
            ...state.formId,
            action.payload
          ]
        }
      }

    default:
      return state;
  }
}