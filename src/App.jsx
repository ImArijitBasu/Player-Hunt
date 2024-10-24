import "./App.css";
import Banner from "./Components/Banner/Banner";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";


function App() {
  return (
    <>
      <div className="container mx-auto px-2">
        <Header></Header>
        <Banner></Banner>
        <ButtonContainer></ButtonContainer>
        <Players></Players>
      </div>
      <div className="">
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
