export class ConditionalAction {
    constructor(condition, action) {
        this.condition = condition
        this.wrappedAction = action
    }
}

const multiConditionalMiddleware = ({ getState, dispatch }) => next => action => {
  const initialState = getState()
  const processConditional = (a) => a instanceof ConditionalAction ?
    (a.condition(getState(), initialState) ? dispatch(a.wrappedAction) : a.wrappedAction) :
    Array.isArray(a) ? processAction(a) : next(a)
  const processAction = (a) => Array.isArray(a) ? a.filter(v => Boolean).map(i => processConditional(i)) : processConditional(a)
  return processAction(action)
}

export default multiConditionalMiddleware