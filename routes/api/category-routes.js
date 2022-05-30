const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// localhost:3001/api/category
router.get('/', (req, res) => {
    Category.findAll().then((categoryData) => {
        res.json(categoryData);
    });
});

router.get('/:id', (req, res) => {
Category.findOne().then((categoryData) => {
  res.json(categoryData);
});
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;