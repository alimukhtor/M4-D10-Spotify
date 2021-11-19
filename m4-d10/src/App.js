import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar'
import AlbumPage from './components/AlbumPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
      <BrowserRouter>
      <SideBar />
        <Routes>
          <Route path="/album-page" element={<AlbumPage />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
