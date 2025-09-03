

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add more routes here for /login, /signup, /dashboard, etc. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
