const express = require('express');
const app = express();
const PORT = 3000;

// Route GET simple
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur notre API' });
});

// Route GET avec paramètre
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ userId: id, name: 'John Doe' });
});

// Écouter sur le port
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
