import pathologies from '@/data/pathologies.json';
import treatments from '@/data/treatments.json';
import scores from '@/data/scores.json';
import diagnosticGuides from '@/data/diagnosticGuides.json';

export const getPathologies = () => pathologies;
export const getTreatments = () => treatments;
export const getScores = () => scores;
export const getDiagnosticGuides = () => diagnosticGuides;

export const searchPathologies = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return pathologies.filter(
    (p) =>
      p.nom.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.categorie.toLowerCase().includes(lowerQuery)
  );
};

export const getPathologyById = (id: string) => {
  return pathologies.find((p) => p.id === id);
};

export const getTreatmentsByPathology = (pathologyId: string) => {
  const pathology = getPathologyById(pathologyId);
  if (!pathology) return [];
  return treatments.filter((t) => t.pathologiesAssociees.includes(pathologyId));
};
