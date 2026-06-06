import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import Pathology from '@/pages/Pathology';
import Treatment from '@/pages/Treatment';
import Diagnostic from '@/pages/Diagnostic';
import Tools from '@/pages/Tools';
import '@/styles/global.css';
import '@/styles/components.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pathologies" element={<Pathology />} />
            <Route path="/pathologie/:id" element={<Pathology />} />
            <Route path="/traitements" element={<Treatment />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/outils" element={<Tools />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
