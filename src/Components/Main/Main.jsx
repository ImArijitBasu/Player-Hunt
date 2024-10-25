import PropTypes from 'prop-types';
import Players from '../Players/Players';
import Remaining from '../Remaining/Remaining';

const Main = ({isActive , handleAddedPlayer ,addedPlayers ,handleDelete , handleReturnToPlayers}) => {
  return (
    <div>{isActive.player ? <Players handleAddedPlayer={handleAddedPlayer}></Players> : <Remaining handleReturnToPlayers={handleReturnToPlayers} handleDelete={handleDelete} addedPlayers={addedPlayers}></Remaining>}</div>
  );
};
Main.propTypes = {
  isActive : PropTypes.object.isRequired,
  handleAddedPlayer : PropTypes.func.isRequired,
  addedPlayers : PropTypes.array.isRequired,

}

export default Main;
