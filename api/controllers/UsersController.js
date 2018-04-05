module.exports = {
  list: (req, res) => {
    Users.find({}).exec((err, users) => {
      if (err) {
        res.send(500, { error: 'Database Error' });
      }
      res.view('listUsers', { users: users });
    });
  },
  add: (req, res) => {
    res.view('addUsers');
  },
  create: (req, res) => {
    var name = req.body.name;
    Users.create({ name: name }).exec((err) => {
      if (err) {
        res.send(500, { error: 'Database Error' });
      }
      res.redirect('/users/list');
    });
  },
  delete: (req, res) => {
    Users.destroy({ id: req.params.id }).exec((err) => {
      if (err) {
        res.send(500, { error: 'Database Error' });
      }
      res.redirect('/users/list');
    });
    return false;
  },
  edit: (req, res) => {
    Users.findOne({ id: req.params.id }).exec((err, user) => {
      if (err) {
        res.send(500, { error: 'Database Error' });
      }
      res.view('editUser', { user: user });
    });
  },
  update: (req, res) => {
    var name = req.body.name;

    Users.update({ id: req.params.id }, { name: name }).exec(function (err) {
      if (err) {
        res.send(500, { error: 'Database Error' });
      }
      res.redirect('/users/list');
    });
    return false;
  }
};
