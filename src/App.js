import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./component/ProductsList";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="">
      <BrowserRouter basename="/">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:id" element={<ProductsList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
