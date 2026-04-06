import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = import.meta.env.VITE_API_URL

const api = axios.create({
  baseURL: "http://localhost:8000/api/movies"
})


// 🔥 GET DETAIL (movie / tv)
export const getMovie = async (id, type) => {
  try {
    const res = await api.get(`/${type}/${id}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}


// 🔥 GET REVIEWS
export const getReviews = async (id, type) => {
  try {
    const res = await api.get(`/${type}/${id}/reviews`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}


// 🔥 GET SIMILAR
export const getSimilarMovies = async (id, type) => {
  try {
    const res = await api.get(`/${type}/${id}/similar`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}


// 🔥 SEARCH
export const searchMovies = async (query) => {
  try {
    const res = await api.get(`/search?query=${encodeURIComponent(query)}`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}


// 🔥 POPULAR
export const getPopularMovies = async () => {
  try {
    const res = await api.get(`/popular`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}


// 🔥 TRENDING
export const getTrendingMovies = async () => {
  try {
    const res = await api.get(`/trending`)
    return res.data
  } catch (err) {
    console.log(err)
  }
}









