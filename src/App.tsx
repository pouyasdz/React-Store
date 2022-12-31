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
      <Routes>
        <Route path="/" element={ <Container children={<Home/>}/> }/>
        
        <Route path="category">
          <Route path="all" element={ <Container children={<CategoryOverview/>}/> }/>
          <Route path=":id" element={ <Container children={<CategoryProducts/>}/> }/>
        </Route>

        <Route path="product">
          <Route path=":id" element={ <Container children={<Product/>}/> }/>
        </Route>

        <Route path="cart">
          <Route path=":id" element={ <Container children={<Cart/>}/> }/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
