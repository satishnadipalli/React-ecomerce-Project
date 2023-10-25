import { HashRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./component/ProductsList";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Header from "./component/Header";
import Home from "./pages/Home";

function App() {

  return (
    <div className="">
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
  );
}

export default App;
