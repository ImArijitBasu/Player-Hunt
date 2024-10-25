import "./App.css";
import Banner from "./Components/Banner/Banner";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState({
    player: true,
  });
  const [coin , setCoin] = useState(0)
  const [addedPlayers , setAddedPlayers] = useState([]);


  const increaseCoin =() =>{
    const coinValue = 600000 ;
    const newCoin = coin + coinValue;
    setCoin(newCoin)
  }

  const handleAddedPlayer = (player) => {
      const doubleCheck = addedPlayers.find((play) => play.id == player.id);
      
      if(coin > player.price){
        if(doubleCheck){
          toast.error(`hey ${player.name} is already there`)
        }
        else if(addedPlayers.length >= 6) {
          toast.error(`Hey , I'm totally full (●'◡'●)`)
        }
        else{
          
          const newAddedPlayer = [...addedPlayers , player];
          setAddedPlayers(newAddedPlayer)
          const newCoinValue = coin-player.price;
          setCoin(newCoinValue)
          toast.success(`${player.name} added successfully 🥵`)
        }
  
      }
      else{
        toast.error(`you need more ${player.price - coin} money 🤑`)
      }

  }
const handleDelete = (player) =>{
  console.log(player.name);
  const remainingPlayer = addedPlayers.filter((p)=> p.id !== player.id);
  const newCoinBalence = coin + player.price;
  setAddedPlayers(remainingPlayer)
  setCoin(newCoinBalence)
}

  const handleToggle = (status) => {
    if (status == "Available") {
      setIsActive({
        player: true,
      });
    } else {
      setIsActive({
        player: false,
      });
    }
  };
  return (
    <>
      <div className="container mx-auto px-2">
        <Header coin={coin}></Header>
        <Banner increaseCoin={increaseCoin}></Banner>
        <ButtonContainer addedPlayers={addedPlayers}  handleToggle={handleToggle} isActive={isActive}></ButtonContainer>
        <Main handleDelete={handleDelete} addedPlayers={addedPlayers} handleAddedPlayer={handleAddedPlayer} isActive={isActive}></Main>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
