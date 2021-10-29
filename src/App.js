/* import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' */
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './sass/style.css';

function App() {

  return (
    <div className="App">

      <NavBar/>
        <ItemListContainer titulo='Productos'/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;

/* Browser router engloba todo lo que queremos que este enrutado */
/* El navbar queda fuera porque uno no quiere navegar por el navbar en si */
/* El switch funciona como el switch de js y sirve para navegar entre uno u otro componente */
/* Route nos asocia el componente con la ruta */
/* Se pone exact para que la ruta sea exactamente la que elegimos */