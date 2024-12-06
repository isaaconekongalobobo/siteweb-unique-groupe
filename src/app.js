const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration des vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', (req, res) => {
  res.render ('home', {title: "Acceuil"})
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});