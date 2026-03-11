import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Header basePath="/en" />

      <section id="inicio" className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Talent and Organization Strategies</div>
          <h1>Talent and Organization Strategies for growing companies</h1>

          <div className="hero-copy">
            <p>At NUMA, we believe in the potential of growing companies to drive the country’s development.</p>
            <p>We help small and medium-sized companies professionalize talent management by implementing compensation, leadership, and organizational culture practices so they can grow with professionalism, equity, and technology.</p>
            <p>We are a specialized consulting firm that combines the best of technology and artificial intelligence with the experience of senior consultants to deliver the best strategic solutions with close, practical, and expert support.</p>
          </div>

          <div className="hero-actions">
            <a className="cta" href="#contacto">Contact us</a>
            <a className="cta secondary" href="#servicios">See services</a>
          </div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="section-head">
          <span className="section-kicker">Services</span>
          <h2>Services</h2>
        </div>

        <div className="services">
          <div className="card"><h3>Compensation and structure</h3><p>We design salary bands, policies, and incentive models aligned with market conditions and financial capacity.</p><p>Deliverable: compensation matrix and implementation guide.</p></div>
          <div className="card"><h3>Succession plans</h3><p>Design and implementation of succession routes and key talent development (critical roles map, potential assessments, individual development plans, and transition roadmap) to ensure operational continuity and lower risk during periods of change.</p></div>
          <div className="card accent-card"><h3>Leadership</h3><p>Practical programs for growing managers: diagnosis, training, and coaching.</p><p>Deliverable: development roadmap and coaching sprints.</p></div>
          <div className="card"><h3>Culture management</h3><p>Definition of values, measurement, and plans to align behavior and strategy.</p><p>Deliverable: cultural map and activation plan.</p></div>
          <div className="card highlight-card"><h3>Coaching</h3><p>Personalized programs for leaders and middle managers with clear objectives and KPI follow-up to accelerate decision-making and execution of strategic goals.</p></div>
          <div className="card"><h3>Mentoring</h3><p>One-to-one support for leaders and managers with measurable objectives.</p><p>Deliverable: 3–6 month plan with KPIs.</p></div>
          <div className="card"><h3>Workshops</h3><p>Workshops for teams and leaders on key topics such as retention, motivation, and change.</p><p>Deliverable: workshop + downloadable materials.</p></div>
          <div className="card"><h3>Change management</h3><p>Strategic and operational support to implement initiatives through impact diagnosis, communication plans, pilots, and adoption measurement.</p></div>
          <div className="card"><h3>Performance management</h3><p>Design and implementation of simple and effective evaluation processes, including criteria definition, leader workshops on feedback, conversation guidelines, and support to increase participation.</p><p>Deliverable: evaluation model, feedback guides, and implementation plan.</p></div>
        </div>
      </section>

      <section id="metodologia" className="section methodology">
        <div className="section-head">
          <span className="section-kicker">How we work</span>
          <h2>Methodology</h2>
        </div>

        <div className="content-block">
          <p>At NUMA, we work with a methodology designed for growing companies: rigorous in diagnosis, simple in implementation, and focused on concrete results.</p>
          <p>We combine people management best practices with technology and artificial intelligence to design solutions that can truly be implemented in the reality of SMEs.</p>
          <p>Our focus is not only on diagnosing, but on installing capabilities and systems that continue working after the consulting engagement.</p>
          <p>1. Diagnosis: We analyze strategy, structure, leadership, and people management challenges through interviews and brief tools to identify gaps and priorities.</p>
          <p>2. Design: We translate best practices into concrete tools adapted to the size and stage of each company.</p>
          <p>3. Implementation: We support leaders with workshops, practical guides, and direct support to install changes in daily operations.</p>
          <p>4. Measurement: We define simple indicators to assess adoption and impact, strengthening installed practices over time.</p>
        </div>
      </section>

      <section id="nosotros" className="section">
        <div className="section-head">
          <span className="section-kicker">About us</span>
          <h2>About us</h2>
        </div>

        <div className="content-block">
          <p>If your company is growing, expanding, or wants to professionalize its people management, at NUMA we help translate best practices into concrete solutions, adapted to the size, resources, and pace of growth.</p>
          <p>We design simple-to-implement tools, actionable reports, and practical training so changes translate into results from day one.</p>
          <h3>Francisca Puentes</h3>
          <p>MSc in Human Resources (England), Organizational Psychologist, and postgraduate degree in Strategic Management with over 14 years leading HR areas focused on compensation, structure, labor relations, union negotiations, digital transformation, talent management, and organizational development across the region.</p>
          <h3>Tamara Hernandez</h3>
          <p>PhD (c) in Management | Business Engineer and Founder of Más Líder.</p>
        </div>
      </section>

      <section id="contacto" className="section contact">
        <div className="section-head">
          <span className="section-kicker">Contact</span>
          <h2>Contact</h2>
        </div>

        <p className="contact-copy">Contact us: form asking for name, company, role, and a message field.</p>

        <form className="form">
          <input placeholder="Name"/>
          <input placeholder="Company"/>
          <input placeholder="Role"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <Footer/>
    </>
  )
}
