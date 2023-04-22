export const scoreReducer = function (state = { score: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { score: state.score + action.payload };
    case "DECREMENT":
      return { score: state.score - action.payload };
    default:
      return state;
  }
};

export const scoreTimeReducer = function (state = { time: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { score: state.time + action.payload };
    case "DECREMENT":
      return { score: state.time - action.payload };
    default:
      return state;
  }
};
