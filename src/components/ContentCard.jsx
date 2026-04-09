import { useNavigate } from 'react-router'
import './ContentCard.css'

export default function ContentCard({ id, type, poster, title, rating, }) {
  const navigate = useNavigate()

  return (
    <div
      className="flex origin-center flex-col w-40 rounded-lg bg-dark-card transition-[scale] cursor-pointer select-none overflow-hidden hover:rounded-lg hover:scale-105"
      onClick={() => navigate(`/details/${type}/${id}`)}
    >
      <div className="flex items-center justify-center w-full rounded-t-lg">
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} className="w-full object-contain object-center" draggable="false" />
      </div>
      <div className="py-4 px-2 flex flex-col gap-2 font text-[0.9rem] text-white">
        <h3 className="line-clamp-1">{title}</h3>
        <span className="text-secondary">★ {rating}</span>
      </div>
    </div>
  )
}