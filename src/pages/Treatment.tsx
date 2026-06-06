import { useState } from 'react';
import { getTreatments } from '@/hooks/useData';
import { useSearch } from '@/hooks/useSearch';

export default function Treatment() {
  const treatments = getTreatments();
  const { query, setQuery, results } = useSearch(treatments, ['nom', 'type', 'indication']);

  return (
    <div>
      <h1>💊 Traitements</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un traitement..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        {(query ? results : treatments).map((treatment) => (
          <div key={treatment.id} className="card">
            <h3>{treatment.nom}</h3>
            <p><strong>Type:</strong> {treatment.type}</p>
            <p><strong>Indication:</strong> {treatment.indication}</p>
            <p><strong>Posologie:</strong> {treatment.posologie}</p>
            <p><strong>Effets secondaires:</strong> {treatment.effetsSecondaires}</p>
            <p><strong>Contre-indications:</strong> {treatment.contre_indications}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
