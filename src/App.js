import { HashRouter, Route, Routes, useSearchParams } from "react-router-dom";
import ProductsList from "./component/ProductsList";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Header from "./component/Header";
import Home from "./pages/Home";
import LogMerging from "./component/LogMerging";
import { useState } from "react";

function App() {
  const [signUp,setSignup] = useState(false);

  return (
    <div className="w-full flex justify-center  h-screen flex-col -py-2">
      { !signUp ? <LogMerging setSignup={setSignup}  />  :
        
        <div >
        <HashRouter>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={`/category/:id`} element={<ProductsList />} />
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
