import "../App.css"
function NavBar() {
    return(
        <div>     

        <nav className="navBarTop">
        <div className="divLogo">
          <img onclick="location.href='../index.html'"
            src="../assets/imges/62b0bbd53e9a14638f0cf56364c3ee98-logotipo-de-tenis.png" alt="" className="logoTenis"/>
        </div>
        
        <div className="divUl">
          <ul className="ul">
        
            <li className="navItem"><a className="navLinks" href="./index.html">Inicio</a></li>
            <li className="navItem"><a className="navLinks" href="#">Raquetas</a></li>
            <li className="navItem"><a className="navLinks" href="./ropa.html">Ropa</a></li>
            <li className="navItem"><a className="navLinks" href="./contacto.html">Contacto</a></li>
            <li className="navItem"><a className="navLinks" href="./ubicacion.html">Ubicación</a></li>
          </ul>
        
          </div>
          </nav>
          </div>
    )
}
export default NavBar



