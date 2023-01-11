import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./page/home";
import Product from "./page/product";
import CategoryOverview from "./page/category/CategoryOverview";
import CategoryProducts from "./page/category/CategoryProducts";
import Cart from "./page/cart";
import Content from "./container";
import {CssBaseline, ThemeProvider} from "@mui/material"
import theme from "./theme";
import { Routing } from "./constant";

function App() {

  return (
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Content>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        
       
          <Route path={Routing.category.all} element={ <CategoryOverview/>}/>
          <Route path={Routing.category.singlePageCagegory} element={ <CategoryProducts/>}/>
        

      
          <Route path={Routing.product.singlePageProduct} element={ <Product/>}/>
        

        
          <Route path={Routing.cart} element={ <Cart/>}/>
        

      </Routes>
        </Content>
        </ThemeProvider> 
    </Router>
  );
}

export default App;
