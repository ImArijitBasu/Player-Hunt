import "./App.css";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Toast from "./Components/Toast";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
        <Banner></Banner>
      </div>
    </>
  );
}

export default App;
