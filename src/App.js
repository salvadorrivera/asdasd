// imports de React
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import { CartContext } from './components/cartContext';
import CartContenido from './components/cartContext';
// paginas a importar 
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/itemDetailContainer';
import ItemCategory from './components/category';
import Cart from './components/Cart';



function App() {
  
  return (
  <CartContenido>
  <Router>
    <div className="App">
       <NavBar />
    </div>
      <Switch>
        <Route exact path="/">
        <ItemListContainer />
        </Route>
        <Route exact path="/item/:id">
         <ItemDetailContainer />
        </Route>
        <Route exact path="/category/:categoryId" >
        <ItemCategory />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  </CartContenido>
  );
}

export default App;
