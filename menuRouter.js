/* eslint-disable no-param-reassign */
const express = require('express');
const menuController = require('../controllers/menuController.js');

function routes(Menu) {
  const menuRouter = express.Router();
  const controller = menuController(Menu);
  menuRouter.route('/Menus')
    .post(controller.post)
    .get(controller.get);
  menuRouter.use('/menus/:fsq_id', (req, res, next) => {
    Menu.findById(req.params.fsq_id, (err, menu) => {
      if (err) {
        return res.send(err);
      }
      if (menu) {
        req.menu = menu;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  menuRouter.route('/menus/:fsq_Id')
    .get((req, res) => res.json(req.menu))
    .put((req, res) => {
      const { menu } = req;
      menu.price = req.body.price;
      menu.description = req.body.description;
      menu.name = req.body.name;
      req.menu.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(menuItem);
      });
    })
    .patch((req, res) => {
      const { menu } = req;
      // eslint-disable-next-line no-underscore-dangle
      if (req.body._id) {
        // eslint-disable-next-line no-underscore-dangle
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        menu[key] = value;
      });
      req.menu.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.json(menu);
      });
    })
    .delete((req, res) => {
      req.menu.remove((err) => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });
  return menuRouter;
}

module.exports = routes;
