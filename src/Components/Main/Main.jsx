
import Players from '../Players/Players';
import Remaining from '../Remaining/Remaining';

const Main = ({isActive , handleAddedPlayer ,addedPlayers}) => {
  return (
    <div>{isActive.player ? <Players handleAddedPlayer={handleAddedPlayer}></Players> : <Remaining addedPlayers={addedPlayers}></Remaining>}</div>
  );
};

export default Main;
