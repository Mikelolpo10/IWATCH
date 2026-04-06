import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const TMDB_URL = "https://api.themoviedb.org/3"

export const getMovie = async (id, type) => {
  try {
    const res = await axios.get(`${TMDB_URL}/${type}/${id}?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getReviews = async (id, type) => {
  try {
    const res = await axios.get(`${TMDB_URL}/${type}/${id}/reviews?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const searchMovies = async (query) => {
  try {
    const res = await axios.get(`${TMDB_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getPopularMovies = async () => {
  try {
    const res = await axios.get(`${TMDB_URL}/movie/popular?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getTrendingMovies = async () => {
  try {
    const res = await axios.get(`${TMDB_URL}/trending/all/day?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getSimilarMovies = async (id, type) => {
  try {
    const res = await axios.get(`${TMDB_URL}/${type}/${id}/similar?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}









