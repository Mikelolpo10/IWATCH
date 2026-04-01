import { useState, useEffect } from "react"
import { useParams } from "react-router"
import Navbar from "../components/Navbar"
import { getMovie, getReviews, getSimilarMovies } from "../services/api"
import formatRunTime from '../utils/formatRunTime.js'
import "./ContentPage.css"

export default function ContentPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [reviews, setReviews] = useState()
  const [similarMovie, setSimilarMovies] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieData, reviewsData, similarData] = await Promise.all([
          getMovie(id),
          getReviews(id),
          getSimilarMovies(id),
        ])

        setMovie(movieData)
        console.log(reviewsData.results)
        setReviews(reviewsData.results.slice(0, 3))
        setSimilarMovies(similarData.results.slice(0, 7))
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (loading) {
    return <h1>FETCHING MOVIE DATA...</h1>
  }

  return (
    <>
      <title>{movie.title}</title>


      <Navbar />

      <section className="film-hero">
        <div id="hero-backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}></div>
        <div id="hero-overlay"></div>

        <div className="film-info">
          <div className="film-badge">New Release</div>
          <h1 className="film-title">{movie.title}</h1>

          <div className="film-meta">
            <span className="rating-large">★ {movie.vote_average.toFixed(1)}</span>
            <span>{movie.release_date.slice(0, 4)}</span>
            <span>{formatRunTime(movie.runtime)}</span>
            <span className="film-age-rating">16+</span>
          </div>

          <p className="film-overwiew">
            In 2045, a rogue artificial intelligence threatens to plunge the world into chaos...
          </p>

          <div className="film-actions">
            <button className="btn btn-play">▶ Play Now</button>
            <button className="btn btn-list">+ My List</button>
            <button className="btn btn-share">↗ Share</button>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <div className="stats-grid">
          {[
            ["9.2", "IMDB Rating"],
            ["94%", "Critics Score"],
            ["2.4M", "Views"],
            ["15+", "Awards"]
          ].map(([value, label], i) => (
            <div className="stat-card" key={i}>
              <div className="stat-value">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

        <section id="cast" className="section">
          <h2 className="section-title">CAST & CREW</h2>
          <div className="cast-grid">
            {[
              ["👩", "Sarah Mitchell", "Maya Chen"],
              ["👨", "Marcus Lee", "Agent Cross"],
              ["🧑", "Dr. Elena Volkov", "Dr. Sarah Park"],
              ["👴", "James Wu", "Director Chen"],
              ["🎬", "Alex Rivers", "Director"],
              ["✍️", "Jordan Blake", "Writer"]
            ].map(([icon, name, role], i) => (
              <div className="cast-member" key={i}>
                <div className="cast-avatar">{icon}</div>
                <div className="cast-name">{name}</div>
                <div className="cast-role">{role}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="details" className="section">
          <h2 className="section-title">DETAILS</h2>

          <div className="details-grid">
            <div className="detail-block">
              <h3>Movie Information</h3>
              <ul className="detail-list">
                <li><span>Release Date</span><span>March 15, 2024</span></li>
                <li><span>Runtime</span><span>2h 28min</span></li>
                <li><span>Language</span><span>English</span></li>
                <li><span>Country</span><span>USA</span></li>
                <li><span>Budget</span><span>$85M</span></li>
              </ul>
            </div>

            <div className="detail-block">
              <h3>Genres</h3>
              <div className="genre-tags">
                {["Sci-Fi", "Thriller", "Action", "Cyberpunk", "Mystery"].map(g => (
                  <span key={g} className="genre-tag">{g}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="section">
          <h2 className="section-title">REVIEWS</h2>
          <div className="reviews-container">
            {reviews.map(({ id, author, author_details, content, updated_at }) => (
              <div className="review-card" key={id}>
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-name">{author}</div>
                    <div style={{ color: "var(--text-dim)", fontSize: "0.75rem" }}>
                      {updated_at}
                    </div>
                  </div>
                  <div className="review-rating">★ {author_details.rating || '-'}</div>
                </div>
                <p className="review-text">{content}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="similar" className="section">
          <h2 className="section-title">MORE LIKE THIS</h2>

          <div className="similar-grid">
            {similarMovie.map(({ id, poster_path, title, vote_average }) => (
              <div className="similar-card" key={id}>
                <img className="similar-img" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                <div className="similar-info">
                  <h3>{title}</h3>
                  <span>
                    ★ {vote_average > 0
                      ? vote_average.toFixed(1)
                      : "-"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

// adult                 : false
// backdrop_path         : "/u8DU5fkLoM5tTRukzPC31oGPxaQ.jpg"
// belongs_to_collection : { id: 87096, name: "Avatar Collection", poster_path: "/3C5brXxnBxfkeKWwA1Fh4xvy4wr.jpg", backdrop_path: "/6qkJLRCZp9Y3ovXti5tSuhH0DpO.jpg" }
// budget                : 350000000
// genres                : [{…}, {…}, {…}]
// homepage              : "https://www.avatar.com/movies/avatar-fire-and-ash"
// id                    : 83533
// imdb_id               : "tt1757678"
// origin_country        : ["US"]
// original_language     : "en"
// original_title        : "Avatar: Fire and Ash"
// overview              : "In the wake of the devastating war against the RDA and the loss of their eldest son, Jake Sully and Neytiri face a new threat on Pandora: the Ash People, a violent and power-hungry Na'vi tribe led by the ruthless Varang. Jake's family must fight for their survival and the future of Pandora in a conflict that pushes them to their emotional and physical limits."
// popularity            : 369.7046
// poster_path           : "/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg"
// production_companies  : [{…}, {…}, {…}]
// production_countries  : [{…}]
// release_date          : "2025-12-17"
// revenue               : 1482195377
// runtime               : 198
// spoken_languages      : [{…}]
// status                : "Released"
// tagline               : "The world of Pandora will change forever."
// title                 : "Avatar: Fire and Ash"
// video                 : false
// vote_average          : 7.27
// vote_count            : 2010


//OMDB API
// {
//   "Title": "Guardians of the Galaxy Vol. 2",
//   "Year": "2017",
//   "Rated": "PG-13",
//   "Released": "05 May 2017",
//   "Runtime": "136 min",
//   "Genre": "Action, Adventure, Comedy",
//   "Director": "James Gunn",
//   "Writer": "James Gunn, Dan Abnett, Andy Lanning",
//   "Actors": "Chris Pratt, Zoe Saldaña, Dave Bautista",
//   "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
//   "Language": "English",
//   "Country": "United States",
//   "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
//   "Ratings": [
//     {
//       "Source": "Internet Movie Database",
//       "Value": "7.6/10"
//     },
//     {
//       "Source": "Rotten Tomatoes",
//       "Value": "85%"
//     },
//     {
//       "Source": "Metacritic",
//       "Value": "67/100"
//     }
//   ],
//   "Metascore": "67",
//   "imdbRating": "7.6",
//   "imdbVotes": "823,054",
//   "imdbID": "tt3896198",
//   "Type": "movie",
//   "DVD": "N/A",
//   "BoxOffice": "$389,813,101",
//   "Production": "N/A",
//   "Website": "N/A",
//   "Response": "True"
// }