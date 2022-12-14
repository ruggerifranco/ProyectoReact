import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartContextProvider } from "./storage/CartContext";
import CartView from "./components/CartView/CartView";
import { exportItemsToFirestore } from "./services/firebase";

function App() {
  return (
    <div className="App">
      {/* 5. Importamos y renderizamos el Provider */}
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route
              path="/checkout/:orderid"
              element={<h1>Gracias por tu compra</h1>}
            />

            <Route path="*" element={<h1>404: Ruta no encontrada</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      {/* <button onClick={exportItemsToFirestore}>items</button> */}
    </div>
  );
}

export default App;

