import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Cria o estado "menuAberto" começando como falso (fechado)
  const [menuAberto, setMenuAberto] = useState(false);

  // Função que inverte o valor (se tá aberto, fecha; se tá fechado, abre)
  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo">
              <h2>Vitor Vitorino</h2>
            </div>
            <ul className={`nav-menu ${menuAberto ? 'active' : ''}`}>
                <li><a href="#home" onClick={() => setMenuAberto(false)} className='nav-link'>Início</a></li>
                <li><a href="#sobre" onClick={() => setMenuAberto(false)} className='nav-link'>Sobre</a></li>
                <li><a href="#projetos" onClick={() => setMenuAberto(false)} className='nav-link'>Projetos</a></li>
                <li><a href="#contato" onClick={() => setMenuAberto(false)} className='nav-link'>Contato</a></li>
            </ul>
            <div className="hamburger" onClick={alternarMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">
                Aluno de <span className="highlight">Ciência e Tecnologia</span><br />
                UFRN - Front-end Developer
              </h1>
              <p className="hero-description">
                Apaixonado por criar experiências digitais incríveis com HTML, CSS e JavaScript.
              </p>
              <div className="hero-buttons">
                <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
                <a href="#contato" className="btn btn-secondary">Fale Comigo</a>
              </div>
            </div>

            <div className="hero-image">
              <img src="euuuuuuuuuuuu.jpeg" alt="Foto de Vitor Vitorino" />
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="sobre">
        <div className="container">
          <h2 className="section-title">Sobre Mim</h2>
          <div className="sobre-content">
            <div className="sobre-text">
              <p>
                Sou um entusiasta de tecnologia baseado em <strong>Natal, RN</strong>. Atualmente, curso 
                <strong> Ciência e Tecnologia</strong> na <strong>UFRN</strong>, onde desenvolvo uma base sólida em 
                engenharia, lógica de programação e métodos numéricos aplicados.
              </p>
              <p>
                Minha atuação vai além dos códigos acadêmicos. Desenvolvo <strong>Landing Pages de alta conversão para clínicas</strong>, 
                focando em interfaces que transmitem autoridade, facilitam o agendamento de consultas e garantem uma 
                experiência humanizada para o paciente.
              </p>
              <p>
                No front-end, foco em criar experiências fluidas, seguras e performáticas, unindo conhecimentos de 
                <strong> Web Design</strong> com protocolos de rede e normas de segurança técnica.
              </p>
            </div>
            <div className="skills">
              <h3>Minha Stack & Conhecimentos</h3>
              <div className="skills-grid">
                <span className="skill-tag">HTML5 / CSS3</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">Python (Cálculo Numérico)</span>
                <span className="skill-tag">Redes (TCP/IP & MQTT)</span>
                <span className="skill-tag">Sinais e Sistemas</span>
                <span className="skill-tag">UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="projetos">
        <div className="container">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle">Aqui estão alguns dos meus trabalhos em Front-end</p>
          <div className="projetos-grid">
            {/* Projeto 1 */}
            <div className="projeto-card">
              <div className="projeto-image">
                <img src="ODONTO.jpeg" alt="Preview da Landing Page Clínica Odontológica" />
              </div>

              <div className="projeto-content">
                <div className="projeto-tag">Landing Page</div>
                <h3>Clínica Odontológica</h3>
                <p>
                  Desenvolvimento de uma Landing Page focada em conversão e autoridade para uma clínica odontológica. 
                  Interface otimizada para agendamentos rápidos via WhatsApp e layout responsivo.
                </p>

                <div className="projeto-techs" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', padding: '4px 10px', borderRadius: '4px' }}>HTML5</span>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', padding: '4px 10px', borderRadius: '4px' }}>CSS3</span>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', padding: '4px 10px', borderRadius: '4px' }}>UI/UX</span>
                </div>

                <div className="projeto-links">
                  <a href="https://joaovitor130-pixel.github.io/soffhyaolivodont/" className="link-demo" target="_blank" rel="noopener noreferrer">Ver Pag</a>
                  <a href="https://github.com/joaovitor130-pixel/soffhyaolivodont.git" className="link-code" target="_blank" rel="noopener noreferrer">Código</a>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="projeto-card">
              <div className="projeto-image">
                <img src="ACADEMICFLOW.jpeg" alt="Interface de Gestão AcademicFlow" />
              </div>

              <div className="projeto-content">
                <div className="projeto-tag">Gestão / EdTech</div>
                <h3>AcademicFlow</h3>
                <p>
                  Plataforma de produtividade para estudantes da UFRN, focada no gerenciamento de materiais acadêmicos, 
                  cronogramas de estudo e processamento de arquivos para otimização da rotina universitária.
                </p>

                <div className="projeto-techs" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.8rem', background: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', padding: '4px 10px', borderRadius: '4px' }}>HTML5</span>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', padding: '4px 10px', borderRadius: '4px' }}>CSS3</span>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(96, 165, 250, 0.1)', color: '#60a5fa', padding: '4px 10px', borderRadius: '4px' }}>Ja</span>
                </div>

                <div className="projeto-links">
                  <a href="https://joaovitor130-pixel.github.io/projectacademicflow/" className="link-demo" target="_blank" rel="noopener noreferrer">Ver Pag</a>
                  <a href="https://github.com/joaovitor130-pixel/projectacademicflow.git" className="link-code" target="_blank" rel="noopener noreferrer">Código</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="contato">
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>
          <div className="contato-content">
            <p>Quer conversar sobre projetos ou oportunidades? Me manda uma mensagem!</p>
            <div className="contato-links">
              <a href="mailto:joao.vitor.130@ufrn.edu.br" className="contato-link" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i> E-mail
              </a>
              <a href="https://wa.me/5584991425698?text=Olá%20Vitor,%20vi%20seu%20portfólio%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20seus%20serviços!" 
                 className="contato-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/vitor-vitorino-22b41a3b9/" className="contato-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/joaovitor130-pixel/meu-portifolio.git" className="contato-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Vitor Vitorino. Desenvolvido em Natal, RN.</p>
        </div>
      </footer>
    </>
  )
}

export default App