import "./App.css";
import Banner from "./Components/Banner/Banner";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

function App() {
  const [isActive, setIsActive] = useState({
    player: true,
  });
  const [addedPlayers , setAddedPlayers] = useState([]);

  const handleAddedPlayer = (player) => {
      const doubleCheck = addedPlayers.find((play) => play.id == player.id);
      
      if(doubleCheck){
        toast.error(`hey ${player.name} is already there`)
      }
      else if(addedPlayers.length >= 6) {
        toast.error(`hey I'm totally full`)
      }
      else{
        
        const newAddedPlayer = [...addedPlayers , player];
        setAddedPlayers(newAddedPlayer)
        toast.success(`${player.name} added successfully`)
      }


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
        <Header></Header>
        <Banner></Banner>
        <ButtonContainer addedPlayers={addedPlayers}  handleToggle={handleToggle} isActive={isActive}></ButtonContainer>
        <Main addedPlayers={addedPlayers} handleAddedPlayer={handleAddedPlayer} isActive={isActive}></Main>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
