const services = [
  {
    title: "RRHH estratégico fraccional",
    description:
      "Nos integramos como partner de personas para empresas que están creciendo y necesitan criterio, estructura y foco sin incorporar todavía un equipo interno completo de RRHH."
  },
  {
    title: "Evaluación de desempeño",
    description:
      "Diseñamos procesos de evaluación claros, aplicables y sostenibles para alinear expectativas, fortalecer el feedback y convertir el desempeño en una herramienta real de gestión."
  },
  {
    title: "Planes de carrera",
    description:
      "Construimos rutas de desarrollo y marcos de crecimiento para que cada persona entienda qué se espera de su rol, cómo puede avanzar y qué capacidades necesita desarrollar."
  },
  {
    title: "Planes de sucesión",
    description:
      "Identificamos posiciones críticas, riesgos de continuidad y talento con potencial para preparar a la organización para crecer con mayor previsión y estabilidad."
  },
  {
    title: "Desarrollo de liderazgo",
    description:
      "Acompañamos a líderes y jefaturas en habilidades clave como feedback, conversaciones difíciles, alineación de equipos, gestión del desempeño y liderazgo en contextos de cambio."
  },
  {
    title: "Estructura y orden organizacional",
    description:
      "Ayudamos a definir roles, responsabilidades y prácticas base de gestión para que la estructura de personas acompañe el crecimiento del negocio de forma ordenada."
  }
];

const process = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Entendemos el momento de la empresa, su estructura, su cultura y los desafíos prioritarios en gestión de personas."
  },
  {
    step: "02",
    title: "Diseño",
    text: "Proponemos soluciones a medida, realistas y alineadas con el tamaño, ritmo y objetivos de la organización."
  },
  {
    step: "03",
    title: "Implementación",
    text: "Acompañamos la puesta en marcha para asegurar adopción, consistencia y resultados concretos."
  }
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="TF Talent inicio">
            <img src="/logo.svg" alt="TF Talent" className="brand-logo" />
          </a>

          <nav className="site-nav">
            <a href="#servicios">Servicios</a>
            <a href="#metodologia">Metodología</a>
            <a href="#sobre">Sobre TF Talent</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Estrategia de Personas para empresas en crecimiento</span>
            <h1>
              Personas, liderazgo y estructura para crecer con más claridad.
            </h1>
            <p className="hero-text">
              En TF Talent acompañamos a organizaciones que necesitan profesionalizar
              su gestión de personas sin perder agilidad. Diseñamos soluciones de
              talento concretas, cercanas y alineadas con el negocio.
            </p>
            <p className="hero-text">
              Trabajamos en evaluación de desempeño, planes de carrera, sucesión,
              liderazgo y acompañamiento estratégico de RRHH para ayudar a que el
              crecimiento sea sostenible también desde las personas.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="button button-primary">Conversemos</a>
              <a href="#servicios" className="button button-secondary">Ver servicios</a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="metric-card">
              <p className="metric-title">Enfoque</p>
              <h3>Consultoría estratégica, práctica y cercana</h3>
              <p>
                Diseñamos procesos de personas que se pueden implementar de verdad y
                sostener en el tiempo.
              </p>
            </div>
            <div className="mini-grid">
              <div className="mini-card">
                <strong>Desempeño</strong>
                <span>Claridad y conversaciones útiles</span>
              </div>
              <div className="mini-card">
                <strong>Liderazgo</strong>
                <span>Equipos mejor acompañados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Servicios</span>
            <h2>Acompañamiento estratégico en gestión de personas</h2>
            <p>
              Trabajamos con empresas que necesitan ordenar, fortalecer o profesionalizar
              su gestión de talento. Cada proyecto se adapta al momento y realidad de la organización.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodologia" className="section section-alt">
        <div className="container methodology-grid">
          <div className="section-heading sticky-heading">
            <span className="eyebrow">Metodología</span>
            <h2>Un enfoque riguroso, pero aterrizado a la realidad de cada empresa</h2>
            <p>
              No creemos en soluciones genéricas. Combinamos análisis, diseño e implementación
              para que cada iniciativa de personas tenga sentido y tracción en el día a día.
            </p>
          </div>

          <div className="process-list">
            {process.map((item) => (
              <article className="process-card" key={item.step}>
                <div className="process-step">{item.step}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section">
        <div className="container about-box">
          <div>
            <span className="eyebrow">Sobre TF Talent</span>
            <h2>Una consultora enfocada en crecimiento, personas y decisiones con criterio</h2>
          </div>
          <div className="about-copy">
            <p>
              TF Talent nace para acompañar a empresas que ya entienden que crecer no depende
              solo de vender más, sino también de construir equipos, liderazgos y estructuras
              capaces de sostener ese crecimiento en el tiempo.
            </p>
            <p>
              Combinamos mirada estratégica con implementación concreta para transformar la
              gestión de personas en una palanca real de desarrollo organizacional.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="section contact-section">
        <div className="container contact-box">
          <span className="eyebrow eyebrow-light">Contacto</span>
          <h2>Conversemos sobre el momento que está viviendo tu empresa</h2>
          <p>
            Si están creciendo, ordenando su estructura o fortaleciendo su gestión de personas,
            podemos ayudarles a diseñar una solución a medida.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <span>Email</span>
              <strong>hola@tftalent.cl</strong>
            </div>
            <div className="contact-card">
              <span>Formato de trabajo</span>
              <strong>Chile · remoto y presencial</strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
