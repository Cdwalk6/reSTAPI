function menuController(Menu) {
  function post(req, res) {
    const menu = new Menu(req.body);
    if (!req.body.name) {
      res.status(400);
      return res.send('Name is required');
    }
    menu.save();
    res.status(201);
    return res.json(menu);
  }
  function get(req, res) {
    const name = {};
    if (req.query.fsq_id) {
      query.fsq_id = req.query.fsq_id;
    }
  menuItems.find(query, (err, menuItems) => {
    if (err) {
      return res.send(err);
    }
    return res.json(menuItems);
  });
}
return { post, get };
}

module.exports = menuController;
