import React from "react";

import Selected from "../Selected/Selected";
const Remaining = ({ addedPlayers  }) => {
  return (
    <div>
      <Selected addedPlayers={addedPlayers}></Selected>
      <div className="btn bg-yellow-500" >Add More Players</div>
    </div>
  );
};

export default Remaining;
