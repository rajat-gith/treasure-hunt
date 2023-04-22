import React from "react";
import "../../styles/StageStyle.css";
import { useDispatch } from "react-redux";
import { setStage } from "../../actions/stageActions";

function Stage5() {
  const dispatch=useDispatch()
  return (
    <div className="Stage_5">
      <span className="stage_title">
        Let's see where your instincts directs you.
      </span>
      <p>
        Advising the Avengers on retrieving a deadly weapon, you must weigh two
        options: (1) A stealthy approach with less collateral damage but a
        longer time, (2) a frontal assault with relatively more damage but
        higher success rate. Consider factors like collateral damage, success
        probability, and consequences of failure. What factors would you
        examine?
      </p>
      <div className="option_buttons">
        <button
          onClick={() => {
            dispatch(setStage("STAGE6"));
          }}
        >
          Option 1
        </button>
        <button>Option 2</button>
      </div>
    </div>
  );
}

export default Stage5;
