import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./page/home";
import Product from "./page/product";
import CategoryOverview from "./page/category/CategoryOverview";
import CategoryProducts from "./page/category/CategoryProducts";
import Cart from "./page/cart";
import Content from "./container";
import {CssBaseline, ThemeProvider} from "@mui/material"
import theme from "./theme";



function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Content>
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
        </Content>
        </ThemeProvider> 
    </Router>
  );
}

export default App;
