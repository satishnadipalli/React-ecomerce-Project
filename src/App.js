import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsList from "./component/ProductsList";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Header from "./component/Header";
import Home from "./pages/Home";
import { repoName } from "./constant/variables";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={repoName} element={<Home />} />
          <Route path={`${repoName}/category/:id`} element={<ProductsList />} />
          <Route path={`${repoName}/contact`} element={<Contact />} />
          <Route path={`${repoName}/*`} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
