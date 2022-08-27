import "./reset.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import CardsTemplate from "./components/CardsTemplate/CardsTemplate";
import Footer from "./components/Footer/Footer";
// import { Link, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <CardsTemplate />
            <Footer />
        </div>
    );
}

export default App;
