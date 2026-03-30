import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getMovie } from "../services/api"
import Navbar from "../components/Navbar"
import './ContentPage.css'

export default function ContentPage() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await getMovie(id)
        setMovie(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
        throw new Error
      }
    }

    fetchMovie()
  }, [id])

  if (loading) (
    <h1>FETCHING MOVIE DATA</h1>
  )

  return (
    <>
      <title></title>


      <Navbar />

    </>
  )
}