import { getDiagnosticGuides } from '@/hooks/useData';

interface DecisionNode {
  question: string;
  oui?: DecisionNode | string;
  non?: DecisionNode | string;
}

function renderDecisionTree(node: DecisionNode | string): JSX.Element {
  if (typeof node === 'string') {
    return <p style={{ padding: '10px', backgroundColor: '#e6f2ff', borderRadius: '4px' }}>{node}</p>;
  }

  return (
    <div style={{ marginLeft: '20px', padding: '10px', borderLeft: '2px solid #0066cc' }}>
      <p><strong>❓ {node.question}</strong></p>
      {node.oui && (
        <div>
          <p>✅ Oui:</p>
          {renderDecisionTree(node.oui)}
        </div>
      )}
      {node.non && (
        <div>
          <p>❌ Non:</p>
          {renderDecisionTree(node.non)}
        </div>
      )}
    </div>
  );
}

export default function Diagnostic() {
  const guides = getDiagnosticGuides();

  return (
    <div>
      <h1>🔍 Algorithmes Diagnostiques</h1>
      <p>Guides d'orientation diagnostique pour les pathologies vasculaires</p>

      {guides.map((guide) => (
        <div key={guide.id} className="card">
          <h2>{guide.titre}</h2>
          <p>{guide.description}</p>
          <div style={{ marginTop: '20px' }}>
            {renderDecisionTree(guide.arbreDecisionnel)}
          </div>
        </div>
      ))}
    </div>
  );
}
