
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import FooterInfo from "./components/FooterInfo";
import Header from "./components/Header";
import HomeBase from "./pages/HomeBase";
import GlobalContextProvider from "./context";
import NewVideo from "./pages/NewVideo";


function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeBase />}></Route>
          <Route path="/NewVideo" element={<NewVideo />}></Route>
        </Routes>
        <FooterInfo />
        <Footer />
      </BrowserRouter>
    </GlobalContextProvider>
  );

}

export default App;
