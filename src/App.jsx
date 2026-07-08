import { useEffect, useRef, useState } from 'react'
import './App.css'

const assetBase = import.meta.env.BASE_URL

const navItems = [
  { page: 'home', label: 'Carissa' },
  { page: 'projects', label: 'Projects' },
  { page: 'puzzles', label: 'Puzzles' },
  { page: 'art', label: 'Art' },
  { page: 'reading', label: 'Reading' },
  { page: 'travel', label: 'Travel' },
]

const puzzleCards = [
  {
    title: 'Sunday, April 12, 2026 Cryptic Crossword',
    href: 'cryptic',
    image: null,
  },
  {
    title: 'Queens',
    href: 'https://www.linkedin.com/games/queens',
    image: `${assetBase}puzzles/queens.png`,
  },
  {
    title: 'Zip',
    href: 'https://www.linkedin.com/games/zip',
    image: `${assetBase}puzzles/zip.jpeg`,
  },
  {
    title: 'Tango',
    href: 'https://www.linkedin.com/games/tango',
    image: `${assetBase}puzzles/tango.png`,
  },
  {
    title: 'MinuteCryptic',
    href: 'https://www.minutecryptic.com/',
    image: `${assetBase}puzzles/minutecryptic.ico`,
  },
  {
    title: 'Parseword',
    href: 'https://www.parseword.com/',
    image: `${assetBase}puzzles/parseword.png`,
  },
  {
    title: 'Stacks',
    href: 'https://www.theatlantic.com/games/stacks/archive/',
    image: `${assetBase}puzzles/stacks.png`,
  },
  {
    title: "Caleb's Inferno",
    href: 'https://www.theatlantic.com/games/calebs-inferno/archive/',
    image: `${assetBase}puzzles/calebs.png`,
  },
]

const travelCards = [
  { src: `${assetBase}art_travel/victoria.jpeg`, caption: 'Victoria Street, Edinburgh' },
  { src: `${assetBase}art_travel/calton.jpeg`, caption: 'Calton Hill, Edinburgh' },
  { src: `${assetBase}art_travel/rome1.jpeg`, caption: 'Piazza della Maddalena, Rome' },
  { src: `${assetBase}art_travel/rome2.jpeg`, caption: 'Roman Forum & Farnese Gardens' },
  { src: `${assetBase}art_travel/rome3.jpeg`, caption: 'Colosseum, Rome' },
  { src: `${assetBase}art_travel/prague.jpeg`, caption: 'Dancing House, Prague' },
  { src: `${assetBase}art_travel/vienna.jpeg`, caption: 'Vienna Opera House' },
  { src: `${assetBase}art_travel/budapest.jpeg`, caption: 'Vajdahunyad Vara, Budapest' },
  { src: `${assetBase}art_travel/urquhart.jpeg`, caption: 'Urquhart Castle, Scotland' },
  { src: `${assetBase}art_travel/montmarte.jpeg`, caption: 'Montmartre, Paris' },
  { src: `${assetBase}art_travel/amsterdam.jpeg`, caption: 'Amsterdam' },
  { src: `${assetBase}art_travel/barcelona.jpeg`, caption: 'Barcelona' },
  { src: `${assetBase}art_travel/metropolis.jpeg`, caption: 'Metropolis, Madrid' },
  { src: `${assetBase}art_travel/berlin.jpeg`, caption: 'Brandenburg Gate, Berlin' },
  { src: `${assetBase}art_travel/dublin.jpeg`, caption: 'Temple Bar, Dublin' },
  { src: `${assetBase}art_travel/iceland1.jpeg`, caption: 'Gullfoss, Iceland' },
  { src: `${assetBase}art_travel/iceland2.jpeg`, caption: 'Jokulsarlon Glacier, Iceland' },
  { src: `${assetBase}art_travel/iceland3.jpeg`, caption: 'Hallgrimskirkja, Reykjavik' },
  { src: `${assetBase}art_travel/tangier.jpeg`, caption: 'Tangier, Morocco' },
]

function getPageFromHash(hash) {
  const value = hash.replace(/^#/, '').toLowerCase()
  if (!value || value === 'home') return 'home'
  return value
}

function HomePage() {
  return (
    <>
      <p>
        Hi, I&apos;m <span className="me">Carissa</span>! Welcome to my collection of things
        (inspired by <a className="chester" href="https://chester.how/">Chester</a>&apos;s digital garden).
      </p>

      <p>
        In my free time, I enjoy solving <a className="puzzles" href="#puzzles">puzzles</a>,{' '}
        <a className="art" href="#art">drawing</a>, and (occasionally){' '}
        <a className="reading" href="#reading">reading</a>.
      </p>

      <p>
        I also love to <a className="travel" href="#travel">travel</a> to new places and go hiking with my family and friends.
      </p>
    </>
  )
}

function PuzzlesPage({ navigate }) {
  return (
    <>
      <p className="sub-heading">puzzles</p>

      <div className="section-divider">
        <p>puzzle(s) I&apos;ve made!</p>
        <div className="cards">
          <article className="card">
            <div className="card-header">
              <a
                href="#cryptic"
                className="arrow"
                onClick={(event) => {
                  event.preventDefault()
                  navigate('cryptic')
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8e94bc"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8,16 L16,8" />
                  <path d="M12 8h4 v4" />
                </svg>
              </a>
              <div className="card-copy">
                <p>Sunday, April 12, 2026 Cryptic Crossword</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="section-divider">
        <p>currently playing...</p>
        <div className="cards">
          {puzzleCards.slice(1).map((item) => (
            <article className="card" key={item.title}>
              <div className="card-header">
                <a href={item.href} className="arrow" target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8e94bc"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8,16 L16,8" />
                    <path d="M12 8h4 v4" />
                  </svg>
                </a>
                <div className="card-copy">
                  <p>{item.title}</p>
                  {item.image ? <img src={item.image} alt={item.title} /> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

function ArtPage() {
  const flipbookRef = useRef(null)

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`)
        if (existing) {
          if (existing.dataset.loaded === 'true') {
            resolve()
            return
          }
          existing.addEventListener('load', resolve, { once: true })
          existing.addEventListener('error', reject, { once: true })
          return
        }

        const script = document.createElement('script')
        script.src = src
        script.async = true
        script.addEventListener('load', () => {
          script.dataset.loaded = 'true'
          resolve()
        }, { once: true })
        script.addEventListener('error', reject, { once: true })
        document.body.appendChild(script)
      })

    let isActive = true

    const initialize = async () => {
      if (typeof window === 'undefined' || !flipbookRef.current) return

      if (!window.jQuery) {
        await loadScript(`${assetBase}js/jquery.min.js`)
      }

      if (!window.jQuery?.fn?.turn) {
        await loadScript(`${assetBase}js/turn.min.js`)
      }

      if (isActive && flipbookRef.current && window.jQuery?.fn?.turn) {
        const $flipbook = window.jQuery(flipbookRef.current)
        $flipbook.turn({
          width: 600,
          height: 400,
          autoCenter: true,
          elevation: 50,
          gradients: true,
          duration: 1000,
        })

        $flipbook.bind('turning', (event, page, view) => {
          event.stopPropagation()
          return view
        })
      }
    }

    initialize()

    return () => {
      isActive = false
      if (flipbookRef.current && window.jQuery?.fn?.turn) {
        window.jQuery(flipbookRef.current).turn('destroy')
      }
    }
  }, [])

  return (
    <>
      <p className="sub-heading">art</p>
      <p className="art-intro">travel sketchbook (2025-ongoing)</p>
      <div className="flipbook-container">
        <div className="flipbook-controls">
          <button
            type="button"
            className="flipbook-button"
            onClick={() => {
              if (window.jQuery?.fn?.turn) {
                window.jQuery('#flipbook').turn('previous')
              }
            }}
          >
            ← previous
          </button>
          <button
            type="button"
            className="flipbook-button"
            onClick={() => {
              if (window.jQuery?.fn?.turn) {
                window.jQuery('#flipbook').turn('next')
              }
            }}
          >
            next →
          </button>
        </div>
        <div id="flipbook" ref={flipbookRef}>
          <div className="hard">
            <img src="https://i5.walmartimages.com/seo/Moleskine-Classic-Notebook-Soft-Cover-Large-5-x-8-25-Ruled-Black_f267d2a4-0e64-4cd0-82f3-d8d486380cf6.9e12977fc9d71b6cf991f9ec1a8ab974.png" alt="Notebook cover" />
          </div>
          <div className="hard" />
          {travelCards.map((item) => (
            <div className="page" key={item.caption}>
              <img src={item.src} alt={item.caption} />
              <div className="caption">{item.caption}</div>
            </div>
          ))}
          <div className="hard" />
        </div>
      </div>
    </>
  )
}

function CrypticPage({ navigate }) {
  useEffect(() => {
    const cryptoScript = document.createElement('script')
    cryptoScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js'
    cryptoScript.async = true
    document.body.appendChild(cryptoScript)

    const pmScript = document.createElement('script')
    pmScript.id = 'pm-script'
    pmScript.src = 'https://puzzleme.amuselabs.com/pmm/js/puzzleme-embed.js'
    pmScript.async = true
    document.body.appendChild(pmScript)

    window.PM_Config = window.PM_Config || {}
    window.PM_Config.PM_BasePath = 'https://puzzleme.amuselabs.com/pmm/'
  }, [])

  return (
    <>
      <a
        href="#puzzles"
        className="back-link"
        onClick={(event) => {
          event.preventDefault()
          navigate('puzzles')
        }}
      >
        ← back to puzzles
      </a>
      <p className="sub-heading">cryptic crossword</p>
      <div className="puzzle-embed-wrapper">
        <div
          className="pm-embed-div"
          data-id="3f677549"
          data-set="55cf3b4d940c536c73dee15d5fa6c142cb4201e900d4bbc96574a0f34ddee77"
          data-puzzletype="crossword"
          data-height="700px"
          data-mobilemargin="10px"
        />
        <p className="puzzle-attribution">
          Constructed by Carissa using PuzzleMe&apos;s online crossword maker.
        </p>
      </div>
    </>
  )
}

function PlaceholderPage({ title, body }) {
  return (
    <div className="placeholder">
      <p className="sub-heading">{title}</p>
      <p>{body}</p>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 'home'
    return getPageFromHash(window.location.hash)
  })

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash(window.location.hash))
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (page) => {
    const target = page === 'home' ? '' : page
    window.history.replaceState(null, '', `#${target}`)
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'puzzles':
        return <PuzzlesPage navigate={navigate} />
      case 'art':
        return <ArtPage />
      case 'cryptic':
        return <CrypticPage navigate={navigate} />
      case 'projects':
        return <PlaceholderPage title="Projects" body="A short projects section is coming soon." />
      case 'reading':
        return <PlaceholderPage title="Reading" body="Books and reading notes are on the way." />
      case 'travel':
        return <PlaceholderPage title="Travel" body="A travel journal will be added here soon." />
      default:
        return <HomePage />
    }
  }

  return (
    <>
      <header>
        <nav className="floating-nav-bar">
          {navItems.map((item) => (
            <a
              key={item.page}
              href={`#${item.page === 'home' ? '' : item.page}`}
              onClick={(event) => {
                event.preventDefault()
                navigate(item.page)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>{renderPage()}</main>
    </>
  )
}

export default App
