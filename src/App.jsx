import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Feed from './pages/Feed'
import VideoDetail from './pages/VideoDetail'
import SearchResults from './pages/SearchResults'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Feed />}></Route>
        <Route path='/watch/:id' element={<VideoDetail />}></Route>
        <Route path='/results' element={<SearchResults />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
