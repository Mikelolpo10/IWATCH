import './ContentCard.css'

export default function ContentCard({ poster, title, rating }) {
  return (
    <div className="content-card">
      <div className="card-img">
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <div className="card-meta">
          <span className="card-rating">★ {rating}</span>
          <span>Genre</span>
        </div>
      </div>
    </div>
  )
}