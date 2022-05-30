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
  // post corresponds to what CRUD method?

  Category.create({
    category_name: req.body.category_name

  })

    .then((categoryData) => {
      res.json(categoryData);
    });

});

router.put('/:id', (req, res) => {

  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((categoryData) => {
    res.json(categoryData);
  });

  // put corresponds to what CRUD method?
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  //delete corresponds to what CRUD method?

  Category.delete({
    where: {
      id:req.params.id
    }
  })
});

module.exports = router;