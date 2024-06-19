import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Transaction from "./pages/Transaction/Transaction";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
