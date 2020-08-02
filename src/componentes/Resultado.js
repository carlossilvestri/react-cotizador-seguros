import React, { Fragment} from "react";

const Resultado = ( props) => {
    const {total, plazo, cantidad} = props;
  return (
    <Fragment>
      <div className="u-full-width resultado mensajes">
        <h2>Desde resultado.</h2>
        <p>La cantidad solicitada es: $ {cantidad}</p>
        <p>A pagar en: {plazo}</p>
        <p>Su pago mensual es de: $ {(total/plazo).toFixed(2)} </p>
        <p>Total a pagar: {(total).toFixed(2)}</p>
      </div>
    </Fragment>
  );
};

export default Resultado;
