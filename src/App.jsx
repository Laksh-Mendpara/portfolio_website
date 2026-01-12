import { useEffect, useState } from 'react'

function App() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [brokenPieces, setBrokenPieces] = useState([])
  
  useEffect(() => {
    setMounted(true)
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 150)
    }, 3000 + Math.random() * 2000)

    // Generate random broken pieces
    const pieces = []
    for (let i = 0; i < 30; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 80,
        rotation: Math.random() * 360,
        delay: Math.random() * 5
      })
    }
    setBrokenPieces(pieces)

    return () => {
      clearInterval(glitchInterval)
    }
  }, [])

  const socialLinks = [
    { name: 'GITHUB', url: 'https://github.com/Laksh-Mendpara' },
    { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/laksh-mendpara/' },
    { name: 'LEETCODE', url: 'https://leetcode.com/u/laksh_mendpara/' }
  ]

  return (
    <div className={`app ${mounted ? 'mounted' : ''} ${glitchActive ? 'glitch-active' : ''}`}>

      {/* Chaos Background */}
      <div className="chaos-bg">
        {brokenPieces.map(piece => (
          <div 
            key={piece.id}
            className="broken-piece"
            style={{
              '--x': `${piece.x}%`,
              '--y': `${piece.y}%`,
              '--size': `${piece.size}px`,
              '--rotation': `${piece.rotation}deg`,
              '--delay': `${piece.delay}s`
            }}
          />
        ))}
        <div className="static-noise"></div>
        <div className="scan-line"></div>
      </div>

      {/* Glitch Overlay */}
      <div className="glitch-overlay">
        <div className="glitch-bar"></div>
        <div className="glitch-bar"></div>
        <div className="glitch-bar"></div>
      </div>

      {/* Main Content */}
      <main className="content">
        {/* Warning Banner */}
        <div className="warning-banner">
          <span className="warning-icon">⚠</span>
          <span className="warning-scroll">
            UNDER CONSTRUCTION • UNDER CONSTRUCTION • UNDER CONSTRUCTION • UNDER CONSTRUCTION • UNDER CONSTRUCTION • UNDER CONSTRUCTION •
          </span>
        </div>

        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            {/* Broken Title */}
            <h1 className="broken-title">
              <span className="title-piece piece-1">PORT</span>
              <span className="title-piece piece-2">FO</span>
              <span className="title-piece piece-3">LI</span>
              <span className="title-piece piece-4">O</span>
            </h1>

            <div className="status-block">
              <div className="status-line">
                <span className="blink">[</span>
                <span className="status-text">STATUS: BREAKING THINGS</span>
                <span className="blink">]</span>
              </div>
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                  <div className="progress-glitch"></div>
                </div>
                <span className="progress-text">??%</span>
              </div>
            </div>

            {/* ASCII Art */}
            <pre className="ascii-art">
{`
    ╔══════════════════════════════════════╗
    ║  LAKSH MENDPARA                      ║
    ║  ─────────────────────────           ║
    ║  CSE @ IIT JODHPUR                   ║
    ║  B.TECH • 3RD YEAR                   ║
    ║                                      ║
    ║  > BUILDING SOMETHING WILD_          ║
    ╚══════════════════════════════════════╝
`}
            </pre>

            {/* Scattered Links */}
            <div className="scattered-links">
              {socialLinks.map((link, i) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scatter-link"
                  style={{ '--index': i }}
                >
                  <span className="link-bracket">[</span>
                  {link.name}
                  <span className="link-bracket">]</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Chaos */}
        <div className="bottom-chaos">
          <div className="code-rain">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="code-column" style={{ '--col': i }}>
                {[...Array(30)].map((_, j) => (
                  <span key={j}>
                    {Math.random() > 0.5 ? '1' : '0'}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="error-messages">
            <p className="error">ERROR: portfolio.exe not found</p>
            <p className="error">ERROR: coffee_supply running low</p>
            <p className="error warning">WARNING: deadline approaching</p>
            <p className="error success">LOADING: more features...</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="chaos-footer">
          <span className="footer-glitch" data-text="© 2026 LAKSH MENDPARA">© 2026 LAKSH MENDPARA</span>
        </footer>
      </main>
    </div>
  )
}

export default App
