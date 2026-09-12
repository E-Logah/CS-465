const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    heading: 'Travel'
  });
};

module.exports = {
  travel
};
