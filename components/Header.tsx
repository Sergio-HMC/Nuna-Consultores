export default function Header(){
  return(
    <header className="header">
      <div className="header-inner">
        <a href="/es" className="brand" aria-label="Numa Consultores inicio">
          <img src="/logo-numa.png" alt="Numa Consultores" className="brand-logo" />
        </a>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#metodologia">Metodología</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
