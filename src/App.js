import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './sass/style.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo='Productos'/>
    </div>
  );
}

export default App;
