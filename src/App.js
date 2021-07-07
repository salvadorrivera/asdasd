// imports de React
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// paginas a importar 
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/itemDetailContainer';
import ItemCategory from './components/category';

function App() {
  return (
  <>
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
      </Switch>
    </Router>
  </>
  );
   
}

export default App;
