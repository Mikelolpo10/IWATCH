import { useNavigate } from 'react-router'
import './ContentCard.css'

export default function ContentCard({ id, type, poster, title, rating, }) {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col w-40 bg-dark-card transition-all hover:scale-105"
      onClick={() => navigate(`/details/${type}/${id}`)}
    >
      <div className="flex items-center justify-center w-30">
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} className="object-contain object-center" />
      </div>
      <div className="py-4 px-2 flex flex-col gap-2 font text-[0.9rem] text-white">
        <h3 className="line-clamp-1">{title}</h3>
        <span className="card-rating">★ {rating}</span>
      </div>
    </div>
  )
}