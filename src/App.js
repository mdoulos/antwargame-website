import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, ScrollToTop } from './components'
import { Homepage, Install, Play, About, Modding, History } from './pages';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/install" element={<Install />} />
              <Route path="/play" element={<Play />} />
              <Route path="/about" element={<About />} />
              <Route path="/modding" element={<Modding />} />
              <Route path="/history" element={<History />} />
            </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
