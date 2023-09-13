import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import POC from './pages/POC'
import Box from './pages/Box'
function App() {
  return (
    <Routes>
      <Route path="/" element={<POC />}></Route>
      <Route path="/box/:index" element={<Box />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  )
}

export default App
