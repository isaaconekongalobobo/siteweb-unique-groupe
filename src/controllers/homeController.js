exports.index = (req, res) => {
  res.render('home', {
    title: 'Accueil',
    content: 'Bienvenue sur notre application!'
  });
};