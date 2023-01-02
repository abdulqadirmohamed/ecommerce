import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { CounterContextProvider } from "./context/CounterContext";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="checkout" element={<Checkout/>} />
        </Routes>
      </CounterContextProvider>
    </div>
  );
}

export default App;
