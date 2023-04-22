export const setScore = (type, score) => async (dispatch) => {
  if (type == "INCREMENT") {
    dispatch({
      type: "INCREMENT",
      payload: Number(score),
    });
    localStorage.setItem("scoreInfo", JSON.stringify(score));
  }
};

export const setTimeScore = (type, time) => async (dispatch) => {
  if (type == "INCREMENT") {
    dispatch({
      type: "INCREMENT",
      payload: Number(time),
    });
    localStorage.setItem("TimeScoreInfo", JSON.stringify(score));
  }
};
