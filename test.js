// Importation d'Express
const express = require('express');
const app = express();

// Définition du port
const PORT = 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
