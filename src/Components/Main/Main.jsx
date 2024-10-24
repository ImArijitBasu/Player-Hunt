
import Players from '../Players/Players';
import Remaining from '../Remaining/Remaining';

const Main = ({isActive , handleAddedPlayer}) => {
  return (
    <div>{isActive.player ? <Players handleAddedPlayer={handleAddedPlayer}></Players> : <Remaining></Remaining>}</div>
  );
};

export default Main;
