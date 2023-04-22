export const stageReducer = function (state = { stage: "Stage1" }, action) {
  switch (action.type) {
    case "STAGE1":
      return { stage: action.payload };
    case "STAGE2":
      return { stage: action.payload };
    case "STAGE3":
      return { stage: action.payload };
    case "STAGE4":
      return { stage: action.payload };
    case "STAGE5":
      return { stage: action.payload };
    case "STAGE6":
      return { stage: action.payload };
    case "STAGE7":
      return { stage: action.payload };
    case "FINALSTAGE":
      return { stage: action.payload };
    default:
      return state;
  }
};
