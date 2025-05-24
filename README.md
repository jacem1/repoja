# RepojA - Plateforme de recherche de bricoleurs en Tunisie

Une application web permettant de trouver des bricoleurs (peintres, électriciens, chauffeurs, jardiniers) dans différentes villes de Tunisie.

## Fonctionnalités

- Recherche de bricoleurs par domaine et ville
- Affichage des coordonnées des bricoleurs
- Inscription des bricoleurs
- Interface responsive et moderne

## Technologies utilisées

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Installation

```bash
# Cloner le repository
git clone [URL_DU_REPO]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## Déploiement

L'application est déployée sur Render. Pour déployer une nouvelle version :

1. Pousser les changements sur GitHub
2. Render détectera automatiquement les changements
3. Le déploiement se fera automatiquement

## Structure du projet

```
src/
  ├── pages/          # Pages de l'application
  │   ├── Home.tsx    # Page d'accueil
  │   ├── SearchResults.tsx  # Résultats de recherche
  │   └── Register.tsx       # Inscription bricoleur
  ├── App.tsx         # Composant principal
  └── main.tsx        # Point d'entrée
```