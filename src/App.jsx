import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './assets/Componentes/Menu';
import Gruboton from './assets/Componentes/Gruboton';
import Botopru from './assets/Componentes/botopru';
function App() {

  return (
    <>
      <div className='Edimenu'>

        <Menu></Menu>
        

        <Gruboton></Gruboton>
      </div>
        <div>
          <Botopru></Botopru>
        </div>
      
    </>
  )
}

export default App
