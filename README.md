# E-valmy 🫀

## Description
Guide de recommandations pour la prise en charge des pathologies vasculaires. Application web interactive conçue pour les professionnels de santé et les étudiants.

## Fonctionnalités
- 📚 Base de données complète des pathologies vasculaires
- 💊 Recommandations de traitement
- 🔍 Guides d'orientation diagnostique
- 📊 Calculateurs de scores vasculaires
- 🔄 Contenu facilement modifiable en JSON
- 🎨 Interface intuitive et responsive

## Technologies
- **Frontend**: React 18 + TypeScript
- **Build**: Vite
- **Router**: React Router v6
- **Styling**: CSS moderne
- **Data**: JSON

## Installation

```bash
# Cloner le repository
git clone https://github.com/miranseb-debug/E-valmy.git
cd E-valmy

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

## Structure du projet

```
E-valmy/
├── public/                    # Fichiers statiques
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── components/            # Composants React réutilisables
│   │   ├── Navigation.tsx
│   │   ├── CategoryList.tsx
│   │   ├── PathologyCard.tsx
│   │   ├── ScoreCalculator.tsx
│   │   └── SearchBar.tsx
│   ├── pages/                 # Pages principales
│   │   ├── Home.tsx
│   │   ├── Pathology.tsx
│   │   ├── Treatment.tsx
│   │   ├── Diagnostic.tsx
│   │   └── Tools.tsx
│   ├── data/                  # Données en JSON (modifiables)
│   │   ├── pathologies.json
│   │   ├── treatments.json
│   │   ├── scores.json
│   │   └── diagnosticGuides.json
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # Définitions TypeScript
│   ├── styles/                # Feuilles de styles CSS
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Ajouter du contenu

Tout le contenu médical est stocké en JSON dans le dossier `src/data/`.

### Exemple : Ajouter une pathologie

Éditez `src/data/pathologies.json` :

```json
{
  "id": "atherosclerose-membres",
  "nom": "Athérosclérose des membres inférieurs",
  "description": "Maladie artérielle périphérique...",
  "categorie": "Artériel",
  "epidemiologie": "...",
  "physiopathologie": "...",
  "diagnostic": "...",
  "traitement": "...",
  "complications": "...",
  "pronostic": "..."
}
```

## Calculateurs de scores

Les calculateurs sont définis dans `src/data/scores.json` et peuvent inclure :
- Score ABPI (Ankle Brachial Pressure Index)
- Score de Fontaine
- Score de Rutherford
- Etc.

## Auteur
**Sébastien Miran** - Enseignant

## Licence
MIT
