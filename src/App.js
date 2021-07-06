// imports de React
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// paginas a importar 
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/itemDetailContainer';


function App() {
  return (
  <>
  <Router>
    <div className="App">
       <NavBar />
    </div>
      <Switch>
        <Route exact path="/">
        <ItemListContainer title="hola" name="buenas" />
        </Route>
        <Route exact path="/category/:id">
         <ItemListContainer title="hola" name="buenas" />
        </Route>
        <Route exact path="/item/:id">
         <ItemDetailContainer />
        </Route>
      </Switch>
    </Router>
  </>
  );
   
}

export default App;
