'use strict';
const initialState = {
  action: false
};

const actionsMap = {
  TEST_ACTION: (state, action) => ({test:action})
};

export default function testAction (state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;

  return Object.assign({}, state, reduceFn(state, action));
}