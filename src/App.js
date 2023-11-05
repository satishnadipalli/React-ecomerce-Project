import { HashRouter, Route, Routes, useSearchParams } from "react-router-dom";
import ProductsList from "./component/ProductsList";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Header from "./component/Header";
import Home from "./pages/Home";
import LogMerging from "./component/LogMerging";
import { useState } from "react";
import CartComponent from "./component/CartComponent";

function App() {
  const [signUp,setSignup] = useState(false);
  const [cartCount,setCount] = useState(0);
  return (
    <div className="w-full flex   h-screen flex-col -py-2">
      { !signUp ? <LogMerging setSignup={setSignup}  />  :
        
        <div className="">
        <HashRouter>
        <Header  cartCount={cartCount} setCount={setCount}  />
        <Routes>
          <Route exact path={"/"} element={<Home/>} />
          <Route path={'/cart'} element={<CartComponent cartCount={cartCount} setCount={setCount}/>} />
          <Route path={`/category/:id`} element={<ProductsList  cartCount={cartCount} setCount={setCount}  />} />
          <Route path={`/contact`} element={<Contact />} />
          <Route path={`/*`} element={<ErrorPage />} />
        </Routes>
      </HashRouter>
        </div>

      }
    </div>
  );
}

export default App;
