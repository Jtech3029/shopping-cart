import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./FrontPage";
import ShoppingPage from "./ShoppingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/shopping-page" element={<ShoppingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
