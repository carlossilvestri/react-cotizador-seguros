import React, { Fragment } from "react";

//Forma con return.
// function Header(props) {
//   console.log(props);
//   return (
//     <Fragment>
//       <h1>{props.titulo}</h1>
//     </Fragment>
//   );
// }
//Forma sin return.
//El return esta implicito, por lo tanto no se coloca. Aunque a veces entre las llaves y el return, necesitaras el return.
const Header = ({ titulo, cantidad }) => (
  <Fragment>
    <h1>{titulo}</h1>
  </Fragment>
);

export default Header;
