const defaultState = {
  value: 0,
};
const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    {
      return ({ value: state.value + 1 });
    }
    case 'DECREMENT': {
      return ({ value: state.value - 1 });
    }
    default:
    {
      return state;
    }
  }
};

export default counter;

