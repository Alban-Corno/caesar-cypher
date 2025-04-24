import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Activer le plugin React pour Vite
  test: {
    globals: true, // Activer les variables globales pour les tests
    environment: 'jsdom', // Configurer l'environnement pour simuler un DOM
    setupFiles: './src/setupTests.ts', // Charger un fichier de configuration pour les tests
    coverage: {
      provider: 'istanbul', // Fournisseur de couverture (Istanbul)
      reporter: ['text', 'json', 'html'], // Types de rapports de couverture générés
      reportsDirectory: './coverage', // Emplacement des rapports de couverture
    },
    exclude: [
      'node_modules', // Exclure les dépendances
      'dist', // Exclure le répertoire de distribution
      '**/tests/helpers/*', // Exclure les fichiers d'aide pour les tests
      '**/node_modules/*', // Exclure les sous-dossiers des dépendances
      'coverage/', // Exclure le répertoire de couverture
      'src/types', // Exclure les types spécifiques à l'application
    ],
  },
});
