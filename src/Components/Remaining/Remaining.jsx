
import PropTypes from 'prop-types';
import Selected from "../Selected/Selected";
const Remaining = ({ addedPlayers , handleDelete ,handleReturnToPlayers }) => {
  return (
    <div>
      <Selected addedPlayers={addedPlayers} handleDelete={handleDelete}></Selected>
      <div onClick={handleReturnToPlayers} className="btn bg-yellow-500" >Add More Players</div>
    </div>
  );
};
Remaining.propTypes = {
  addedPlayers : PropTypes.array.isRequired,
  handleDelete : PropTypes.func.isRequired,
  handleReturnToPlayers : PropTypes.func.isRequired,
}

export default Remaining;
