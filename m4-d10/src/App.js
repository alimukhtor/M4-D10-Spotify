import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar'
import AlbumPage from './components/AlbumPage'
import ArtistPage from './components/ArtistPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<SideBar />} />
          <Route path="/album-page" element={<AlbumPage />} />
          <Route path="/artist-page" element={<ArtistPage />} />
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
