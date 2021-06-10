import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js'


function App() {
  return (
  <>
    <div className="App">
       <NavBar />
    </div>
    <ItemListContainer title="hola" name="buenas"/>
  </>
  );
   
}

export default App;
