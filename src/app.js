const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration des vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', routes);

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).render('errors/404');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});