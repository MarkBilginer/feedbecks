export const ADD_TO_FORMID = 'ADD_TO_FORMID';

export function addToFormId(formId) {
  return {
    type: ADD_TO_FORMID,
    payload: { formId }
  }
}