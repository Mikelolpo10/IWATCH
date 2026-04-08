import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar.jsx'
import ContentCard from '../components/ContentCard.jsx'
import Footer from '../components/Footer.jsx'
import { getPopularMovies, getTrendingMovies } from '../services/api.js'
import './Homepage.css'

export default function Homepage() {
  const [popularMovies, setPopularMovies] = useState()
  const [trendingMovies, setTrendingMovies] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [popularMovies, trendingMovies] = await Promise.all([
          getPopularMovies(),
          getTrendingMovies(),
        ])

        console.log(popularMovies.results)
        setPopularMovies(popularMovies.results)
        setTrendingMovies(trendingMovies.results.slice(0, 8))
      } catch (err) {
        throw new Error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [])

  if (loading) {
    return <h1>Loading data</h1>
  }

  return (
    <>
      <title>Home</title>

      <Navbar />

      <section id="hero" className='h-screen flex items-center px-16 relative'>
        <div className="absolute h-full w-full bg-linear-45 from-[#0F0F23] to-[#1A0F2E] -z-1"></div>

        <div className="max-w-xl">
          <div className="bg-[rgb(124,58,237)]/20 text-[rgb(82,134,255)] text-md py-2 px-4 rounded-2xl mb-4 inline-block">NEW ORIGINAL SERIES</div>
          <h1 className='mb-4 text-6xl'>
            ENDLESS <br /> ENTERTAINMENT
          </h1>
          <p className='mb-8'>
            Stream thousands of shows and movies, with new releases added every
            week. Your next obsession is waiting.
          </p>

          <div className="hero-cta">
            <button className="btn-hero btn-watch" onClick={() => getPopularMovies()}>▶ Watch Now</button>
            <button className="btn-hero btn-info">More Info</button>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-card">
            <div className="preview-img"></div>
            <div className="preview-info">
              <h3>Shadow Protocol</h3>
              <div className="preview-meta">
                <span className="rating">★ 9.2</span>
                <span>2024</span>
                <span>Sci-Fi Thriller</span>
              </div>
              <p className="preview-desc">
                A rogue AI threatens humanity's existence. Only one team can stop it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="trending">
        <div className="section-header">
          <h2>TRENDING NOW</h2>
          <Link className='view-all' href="#">View All →</Link>
        </div>

        <div className="content-row">
          {trendingMovies.map(({ id, media_type, poster_path, title, name, vote_average }) => (
            <ContentCard
              key={id}
              id={id}
              type={media_type}
              poster={poster_path}
              title={title || name}
              rating={vote_average.toFixed(1)}
            />
          ))}
        </div>
      </section>

      <section id="popular">
        <div className="section-header">
          <h2>POPULAR ON IWATCH</h2>
          <Link className='view-all' href="#">View All →</Link>
        </div>

        <div className="content-row">
          {popularMovies.map(({ id, poster_path, title, name, vote_average }) => (
            <ContentCard
              key={id}
              id={id}
              type={"movie"}
              poster={poster_path}
              title={title || name}
              rating={vote_average.toFixed(1)}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories">
        <div className="section-header">
          <h2>BROWSE BY GENRE</h2>
        </div>

        <div className="category-grid">
          {[
            { icon: "🎬", title: "ACTION" },
            { icon: "🎭", title: "DRAMA" },
            { icon: "😂", title: "COMEDY" },
            { icon: "👻", title: "HORROR" }
          ].map((cat, i) => (
            <div className="category-card" key={i}>
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>Sample description</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}


// adult: false
// backdrop_path: "/1x9e0qWonw634NhIsRdvnneeqvN.jpg"
// genre_ids: [10749, 18]
// id: 1523145
// original_language: "ru"
// original_title: "Твоё сердце будет разбито"
// overview: "High school student Polina is saved from bullying at her new school and makes a deal with the main bully Bars: he must pretend to be her boyfriend and protect her, and she must do everything he says. During this game, the couple develops real feelings, but her family and classmates have reasons to separate the lovers."
// popularity: 1340.8675
// poster_path: "/7wIBfBl2gejt6xHxNSK0reVIm7E.jpg"
// release_date: "2026-03-26"
// title: "Your Heart Will Be Broken"
// video: false
// vote_average: 6.7
// vote_count: 19