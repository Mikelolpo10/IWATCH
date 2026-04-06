import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage.jsx'
import ContentPage from './pages/ContentPage.jsx'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<Homepage />}
        />
        <Route
          path='/details/:type/:id'
          element={<ContentPage />}
        />
      </Routes>
    </>
  )
}

export default App
