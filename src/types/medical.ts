export interface Pathology {
  id: string;
  nom: string;
  description: string;
  categorie: string;
  epidemiologie: string;
  physiopathologie: string;
  diagnostic: string;
  traitement: string;
  complications: string;
  pronostic: string;
  references?: string[];
}

export interface Treatment {
  id: string;
  nom: string;
  type: string;
  indication: string;
  posologie: string;
  effetsSecondaires: string;
  contre_indications: string;
  pathologiesAssociees: string[];
}

export interface Score {
  id: string;
  nom: string;
  description: string;
  variables: ScoreVariable[];
  calcul: string;
  interpretation: string;
}

export interface ScoreVariable {
  id: string;
  label: string;
  type: 'number' | 'select';
  options?: { value: string; label: string }[];
  unite?: string;
}

export interface DiagnosticGuide {
  id: string;
  titre: string;
  description: string;
  arbreDecisionnel: DecisionNode;
}

export interface DecisionNode {
  question: string;
  oui?: DecisionNode | string;
  non?: DecisionNode | string;
}
