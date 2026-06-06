import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPathologies, getPathologyById } from '@/hooks/useData';
import { useSearch } from '@/hooks/useSearch';

export default function Pathology() {
  const { id } = useParams<{ id: string }>();
  const pathologies = getPathologies();
  const { query, setQuery, results } = useSearch(pathologies, ['nom', 'categorie', 'description']);
  
  const selectedPathology = id ? getPathologyById(id) : null;

  return (
    <div>
      <h1>📋 Pathologies Vasculaires</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher une pathologie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {selectedPathology && (
        <div className="card">
          <h2>{selectedPathology.nom}</h2>
          <span className="pathology-card-category">{selectedPathology.categorie}</span>
          
          <div style={{ marginTop: '20px' }}>
            <h3>Description</h3>
            <p>{selectedPathology.description}</p>

            <h3>Épidémiologie</h3>
            <p>{selectedPathology.epidemiologie}</p>

            <h3>Physiopathologie</h3>
            <p>{selectedPathology.physiopathologie}</p>

            <h3>Diagnostic</h3>
            <p>{selectedPathology.diagnostic}</p>

            <h3>Traitement</h3>
            <p>{selectedPathology.traitement}</p>

            <h3>Complications</h3>
            <p>{selectedPathology.complications}</p>

            <h3>Pronostic</h3>
            <p>{selectedPathology.pronostic}</p>

            {selectedPathology.references && selectedPathology.references.length > 0 && (
              <div>
                <h3>Références</h3>
                <ul>
                  {selectedPathology.references.map((ref, idx) => (
                    <li key={idx}>{ref}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <div>
        <h2>Toutes les pathologies</h2>
        {(query ? results : pathologies).map((pathology) => (
          <a
            key={pathology.id}
            href={`/pathologie/${pathology.id}`}
            className="pathology-card"
          >
            <div className="pathology-card-header">
              <h3 className="pathology-card-title">{pathology.nom}</h3>
              <span className="pathology-card-category">{pathology.categorie}</span>
            </div>
            <p className="pathology-card-description">{pathology.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
