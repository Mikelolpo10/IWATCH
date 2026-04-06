import { useNavigate } from 'react-router'
import './ContentCard.css'

export default function ContentCard({ id, type, poster, title, rating, }) {
  const navigate = useNavigate()

  return (
    <div
      className="content-card"
      onClick={() => navigate(`/details/${type}/${id}`)}
    >
      <div className="card-img">
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <div className="card-meta">
          <span className="card-rating">★ {rating}</span>
        </div>
      </div>
    </div>
  )
}