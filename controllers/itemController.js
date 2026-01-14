const { Item } = require('../models');

// DASHBOARD
exports.dashboard = async (req, res) => {
  const items = await Item.findAll({
    where: { is_active: true }
  });

  res.render('dashboard', {
    items,
    user: req.user
  });
};

// CREATE
exports.create = async (req, res) => {
  await Item.create({
    ...req.body,
    is_active: true,
    created_by: req.user.username
  });

  res.redirect('/dashboard');
};

// EDIT PAGE
exports.editPage = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  res.render('edit-item', { item, user: req.user });
};

// UPDATE (SEMUA FIELD)
exports.update = async (req, res) => {
  await Item.update(
    {
      item_name: req.body.item_name,
      category: req.body.category,
      price: req.body.price,
      stock_qty: req.body.stock_qty,
      min_stock: req.body.min_stock,
      storage_location: req.body.storage_location,
      updated_by: req.user.username
    },
    {
      where: { id: req.params.id }
    }
  );

  res.redirect('/dashboard');
};

// DELETE
exports.delete = async (req, res) => {
  await Item.update(
    { is_active: false },
    { where: { id: req.params.id } }
  );

  res.redirect('/dashboard');
};