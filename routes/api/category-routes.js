const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then((categoryData) => {

      res.json(categoryData)

    }).catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});



// be sure to include its associated Products


router.get('/:id', (req, res) => {
  // find one category by its `id` value

  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }

  }).then((categoryData) => {

    res.json(categoryData)

  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then((newCategory) => {
      res.json(newCategory);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });

  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body,{
    where: {
      id: req.params.id
    }
  }).then((updatedCategory) => {
    res.json(updatedCategory)
  }).catch(()=>{
    console.log(err);
  res.status(500).json(err)
  })
  

})
// update a category by its `id` value


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deletedCategory) => {
    res.json(deletedCategory)
  }).catch((err) => {
    console.log(err)
  })

});

module.exports = router;
