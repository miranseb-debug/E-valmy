import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur E-valmy</h1>
      <p>Guide de recommandations pour la prise en charge des pathologies vasculaires</p>
      
      <div className="category-list">
        <Link to="/pathologies" className="category-card">
          <h3>📋 Pathologies</h3>
          <p>Explorez les maladies vasculaires et leurs caractéristiques cliniques</p>
        </Link>
        
        <Link to="/traitements" className="category-card">
          <h3>💊 Traitements</h3>
          <p>Recommandations thérapeutiques et options de traitement</p>
        </Link>
        
        <Link to="/diagnostic" className="category-card">
          <h3>🔍 Diagnostic</h3>
          <p>Algorithmes d'orientation diagnostique</p>
        </Link>
        
        <Link to="/outils" className="category-card">
          <h3>⚙️ Outils</h3>
          <p>Calculateurs de scores et évaluations</p>
        </Link>
      </div>
    </div>
  );
}
