import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export const getMovie = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getReviews = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const searchMovies = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getPopularMovies = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getTrendingMovies = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}

export const getSimilarMovies = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}









