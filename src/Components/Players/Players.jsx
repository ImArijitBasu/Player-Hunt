import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
const Players = ({handleAddedPlayer}) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("playersArray.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {players.map((player) => (
          <Player handleAddedPlayer={handleAddedPlayer} key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
