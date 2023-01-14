import Contador from "./componentes/Contador";
import Frutas from "./componentes/Frutas";


const App = () => {
  const saludo="saludo desde la variable"

  const classObject ={
    primary:"text-primary",
    danger:"text-danger",
  }
  const user=true;

  const SaludoBienvenida= ()=>(
    <h2 className="text-success">Bienvenido!</h2>
  )

  const SaludoDespedida =()=>(
    <h2 className="text-danger">Adiooooos!</h2>
  )
  
  const funcionClick=()=>{
    console.log("me habies dado click.")
  }

  return (
    <div className="container">
      <Contador />
      <p className={classObject.danger}>{saludo}</p>
      {user? <SaludoBienvenida />: <SaludoDespedida /> }

      <Frutas />
        <button 
          className="btn btn-primary"
          onClick={funcionClick}
        >
          Dadme Click!</button>


    </div>
  );
}

export default App

