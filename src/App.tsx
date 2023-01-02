import Container from "./container";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./page/home";
import Product from "./page/product";
import CategoryOverview from "./page/category/CategoryOverview";
import CategoryProducts from "./page/category/CategoryProducts";
import Cart from "./page/cart";

function App() {
  return (
    <Router>
        <Container>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        
        <Route path="category">
          <Route path="all" element={ <CategoryOverview/>}/>
          <Route path=":id" element={ <CategoryProducts/>}/>
        </Route>

        <Route path="product">
          <Route path=":id" element={ <Product/>}/>
        </Route>

        <Route path="cart">
          <Route path=":id" element={ <Cart/>}/>
        </Route>

      </Routes>
        </Container>
    </Router>
  );
}

export default App;
