import "./reset.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from './components/Navigation/Nav'
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage'

function App() {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Routes> {/*Adding routes*/}
                <Route path="/" element={<MainPage />} />
                {/* <Route path="/Categories" element={<CategoriesPage />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
