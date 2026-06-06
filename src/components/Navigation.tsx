import { Link } from 'react-router-dom';
import '../styles/components.css';

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          🏥 E-valmy
        </div>
        <ul className="navbar-nav">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/pathologies">Pathologies</Link></li>
          <li><Link to="/traitements">Traitements</Link></li>
          <li><Link to="/diagnostic">Diagnostic</Link></li>
          <li><Link to="/outils">Outils</Link></li>
        </ul>
      </div>
    </nav>
  );
}
