import useEmblaCarousel from 'embla-carousel-react'
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
  const [trendingRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: 'start',
  })
  const [popularRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: 'start',
  })

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [popularMovies, trendingMovies] = await Promise.all([
          getPopularMovies(),
          getTrendingMovies(),
        ])

        console.log(trendingMovies.results)
        setTrendingMovies(trendingMovies.results.slice(0, 10))
        setPopularMovies(popularMovies.results.slice(0, 10))
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

      <section id="hero" className='mb-6 p-0 relative h-[40vh] flex flex-col'>
        <div className="absolute h-full w-full bg-linear-45 from-dark to-[#1A0F2E] -z-1"></div>

        <div className="w-full">
          <div className="bg-dark-card p-4 md:rounded-2xl">
            <div className="h-45 bg-dark-lighter"></div>
            <div className="preview-info">
              <h3 className="text-2xl font-bold pt-2">Shadow Protocol</h3>
              <div className="flex items-center gap-4 text-[0.8rem] text-text-dim">
                <span className="text-secondary">★ 9.2</span>
                <span>2024</span>
                <span>Sci-Fi Thriller</span>
              </div>
              <p className="text-text-dim">
                A rogue AI threatens humanity's existence. Only one team can stop it.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full hidden md:block">
          <div className="bg-[rgb(124,58,237)]/20 text-primary text-md py-1 px-4 md:rounded-3xl mb-4 inline-block">NEW ORIGINAL SERIES</div>
          <h1 className='mb-4 text-6xl font-bold'>
            ENDLESS <br /> ENTERTAINMENT
          </h1>
          <p className='mb-8 text-text-dim'>
            Stream thousands of shows and movies, with new releases added every
            week. Your next obsession is waiting.
          </p>
          <div className="flex gap-4">
            <button className="btn-hero bg-primary text-white">▶ Watch Now</button>
            <button className="btn-hero bg-white/10 text-white">More Info</button>
          </div>
        </div>
      </section>

      <section className="p-6">
        <div className="section-header">
          <h2 className="font-semibold">TRENDING NOW</h2>
          <Link className="text-white text-[0.9rem]" href="#">View All →</Link>
        </div>

        <div className="overflow-hidden" ref={trendingRef}>
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
        </div>
      </section>

      <section className="p-6 relative">
        <div className="section-header">
          <h2 className="font-semibold">POPULAR ON IWATCH</h2>
          <Link className='view-all' href="#">View All →</Link>
        </div>

        <div className="overflow-hidden" ref={popularRef}>
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
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-16">
        <div className="section-header">
          <h2>BROWSE BY GENRE</h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
          {[
            { icon: "🎬", title: "ACTION" },
            { icon: "🎭", title: "DRAMA" },
            { icon: "😂", title: "COMEDY" },
            { icon: "👻", title: "HORROR" }
          ].map((cat, i) => (
            <div className="bg-dark-card p-2 rounded-2xl text-center hover:-translate-y-1 transition" key={i}>
              <div className="my-4 text-[2rem]">{cat.icon}</div>
              <h3 className="font-bold text-[1.2rem]">{cat.title}</h3>
              <p className="mb-4">Sample description</p>
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