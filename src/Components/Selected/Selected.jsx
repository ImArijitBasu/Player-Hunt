import PropTypes from 'prop-types'
import SinglePlayer from "../SinglePlayer/SinglePlayer";
const Selected = ({addedPlayers , handleDelete}) => {
  return (
    <div>
        {
            addedPlayers.map(player => <SinglePlayer handleDelete={handleDelete} key={player.id} player={player}></SinglePlayer> )
        }

    </div>
  );
};
Selected.propTypes = {
  addedPlayers : PropTypes.array.isRequired,
  handleDelete : PropTypes.func.isRequired
}

export default Selected;
