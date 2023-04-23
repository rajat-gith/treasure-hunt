export const scoreReducer = function (score = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return score + action.payload;
    case "DECREMENT":
      return score - action.payload;
    default:
      return score;
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
