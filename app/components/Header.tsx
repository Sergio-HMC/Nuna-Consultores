export default function Header({ basePath = "/es" }: { basePath?: string }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href={basePath} className="brand" aria-label="Numa Consultores inicio">
          <img src="/logo-numa.png" alt="Numa Consultores" className="brand-logo" />
        </a>

        <nav className="nav" aria-label="Principal">
          <a href={`${basePath}#inicio`}>Inicio</a>
          <a href={`${basePath}#servicios`}>Servicios</a>
          <a href={`${basePath}#metodologia`}>Metodología</a>
          <a href={`${basePath}#nosotros`}>Nosotros</a>
          <a href={`${basePath}#contacto`}>Contacto</a>
        </nav>
      </div>
    </header>
  )
}
