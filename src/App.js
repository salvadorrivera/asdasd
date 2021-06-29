import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/itemDetailContainer';
function App() {
  return (
  <>
    <div className="App">
       <NavBar />
    </div>
    <ItemListContainer title="hola" name="buenas" />
    <ItemDetailContainer />
  </>
  );
   
}

export default App;
