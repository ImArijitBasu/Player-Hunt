import logo from '../../assets/logo.png'
import SinglePlayer from "../SinglePlayer/SinglePlayer";
const Selected = ({addedPlayers}) => {
    console.log(addedPlayers)
  return (
    <div>
        {
            addedPlayers.map(player => <SinglePlayer key={player.id} player={player}></SinglePlayer> )
        }

    </div>
  );
};

export default Selected;
