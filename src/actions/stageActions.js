export const setStage = (type) => async (dispatch) => {
  if (type == "STAGE1") {
    dispatch({
      type: "STAGE1",
      payload: "Stage1",
    });
    localStorage.setItem("stageInfo", JSON.stringify("Stage1"));
  }
  if (type == "STAGE2") {
    dispatch({
      type: "STAGE2",
      payload: "Stage2",
    });
    localStorage.setItem("stageInfo", JSON.stringify("Stage2"));
  }
  if (type == "STAGE3") {
    dispatch({
      type: "STAGE3",
      payload: "Stage3",
    });
    localStorage.setItem("stageInfo", JSON.stringify("Stage3"));
  }
  if (type == "STAGE4") {
    dispatch({
      type: "STAGE4",
      payload: "Stage4",
    });
    localStorage.setItem("stageInfo", JSON.stringify("Stage4"));
  }
  if (type == "STAGE5") {
    dispatch({
      type: "STAGE5",
      payload: "Stage5",
    });
    localStorage.setItem("stageInfo", JSON.stringify("Stage5"));
  }
  if (type == "STAGE6") {
    dispatch({
      type: "STAGE6",
      payload: "Stage6",
    });
    localStorage.setItem("stageInfo", JSON.stringify("Stage6"));
  }
  if (type == "STAGE7") {
    dispatch({
      type: "STAGE7",
      payload: "Stage7",
    });
    localStorage.setItem("stageInfo", JSON.stringify("Stage7"));
  }
  if (type == "FINALSTAGE") {
    dispatch({
      type: "FINALSTAGE",
      payload: "FinalStage",
    });
    localStorage.setItem("stageInfo", JSON.stringify("FinalStage"));
  }
  if (type == "RESULTSTAGE") {
    dispatch({
      type: "RESULTSTAGE",
      payload: "ResultStage",
    });
    localStorage.setItem("stageInfo", JSON.stringify("FinalStage"));
  }
};
