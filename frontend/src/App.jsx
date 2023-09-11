import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import POC from './pages/POC'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<POC />}></Route>
    </Routes>
  )

}

export default App
