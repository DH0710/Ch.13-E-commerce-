const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    ]
  }).then((tagData) => {
    res.json(tagData);
  });
});

// find all tags
// be sure to include its associated Product data

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    ]
  })
}).then((tagData) => {
  res.json(tagData);
});


// find a single tag by its `id`
// be sure to include its associated Product data


router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
    .then(TagData => {
      res.json(TagData)
      // create a new tag
    });

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;