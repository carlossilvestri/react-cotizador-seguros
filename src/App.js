import React, { useState } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from "./componentes/Spinner";

function App() {
  //Definir el state.
  //Array destructuring. 1er parametro una variable que por default tendra el valor del useState(0) por ejemplo. El 2do parametro seria la funcion guardarCantidad, que se encarga de cambiar a la variable cantidad.
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  //Carga condicional de componentes.
  let componente;
  if (cargando) {
    componente = <Spinner />;
  } else if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }

  return (
    <div className="App">
      <Header titulo="Cotizador de Prestamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        ></Formulario>
        {componente}
      </div>
    </div>
  );
}

export default App;
