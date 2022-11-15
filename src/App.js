import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import {CartContextProvider} from "./storage/CartContext"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from "./components/CartiView/CartView";

import { getSingleItemFromAPI } from "./services/firebase"

function App() {
  getSingleItemFromAPI()
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer/>}
          />
          <Route
            path="/category/:categoryid"
            element={<ItemListContainer/>}
          />
          <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartView/>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
