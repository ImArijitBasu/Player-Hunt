
import PropTypes from 'prop-types';
import Selected from "../Selected/Selected";
const Remaining = ({ addedPlayers , handleDelete }) => {
  return (
    <div>
      <Selected addedPlayers={addedPlayers} handleDelete={handleDelete}></Selected>
      <div className="btn bg-yellow-500" >Add More Players</div>
    </div>
  );
};
Remaining.propTypes = {
  addedPlayers : PropTypes.array.isRequired,
}

export default Remaining;
