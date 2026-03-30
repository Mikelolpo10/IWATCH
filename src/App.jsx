import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage.jsx'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route 
          index 
          element={<Homepage />}
        />
      </Routes>
    </>
  )
}

export default App
