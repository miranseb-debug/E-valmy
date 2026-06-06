import { useState } from 'react';
import { getScores } from '@/hooks/useData';

export default function Tools() {
  const scores = getScores();
  const [selectedScore, setSelectedScore] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);

  const currentScore = selectedScore ? scores.find((s) => s.id === selectedScore) : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    if (!currentScore) return;

    if (currentScore.id === 'score-abpi') {
      const bras = parseFloat(formValues['ps-bras'] || '0');
      const cheville = parseFloat(formValues['ps-cheville'] || '0');
      if (bras > 0) {
        setResult(parseFloat((cheville / bras).toFixed(2)));
      }
    } else if (currentScore.id === 'score-wells-tvp') {
      const cancer = parseInt(formValues['cancer'] || '0');
      const immobilisation = parseInt(formValues['immobilisation'] || '0');
      const douleur = parseInt(formValues['douleur-mollet'] || '0');
      setResult(cancer + immobilisation + douleur);
    } else if (currentScore.id === 'score-fontaine') {
      setResult(0);
    }
  };

  return (
    <div>
      <h1>⚙️ Outils et Calculateurs</h1>

      <div style={{ marginBottom: '30px' }}>
        <h2>Sélectionner un score</h2>
        <select
          value={selectedScore || ''}
          onChange={(e) => {
            setSelectedScore(e.target.value || null);
            setFormValues({});
            setResult(null);
          }}
          style={{ padding: '10px', fontSize: '16px', marginBottom: '20px' }}
        >
          <option value="">-- Sélectionner un score --</option>
          {scores.map((score) => (
            <option key={score.id} value={score.id}>
              {score.nom}
            </option>
          ))}
        </select>
      </div>

      {currentScore && (
        <div className="score-calculator">
          <h2>{currentScore.nom}</h2>
          <p>{currentScore.description}</p>

          <form className="calculator-form">
            {currentScore.variables.map((variable) => (
              <div key={variable.id} className="form-group">
                <label htmlFor={variable.id}>
                  {variable.label}
                  {variable.unite && ` (${variable.unite})`}
                </label>
                {variable.type === 'number' ? (
                  <input
                    id={variable.id}
                    name={variable.id}
                    type="number"
                    step="0.1"
                    value={formValues[variable.id] || ''}
                    onChange={handleInputChange}
                  />
                ) : (
                  <select
                    id={variable.id}
                    name={variable.id}
                    value={formValues[variable.id] || ''}
                    onChange={handleInputChange}
                  >
                    <option value="">-- Sélectionner --</option>
                    {variable.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCalculate}
              style={{ marginTop: '20px' }}
            >
              Calculer
            </button>
          </form>

          {result !== null && (
            <div className="calculator-result" style={{ marginTop: '30px' }}>
              <p className="calculator-result-value">Résultat: {result}</p>
              <p className="calculator-result-interpretation">{currentScore.interpretation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
