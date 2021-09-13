const router = require('express').Router();
const { Category, Product } = require('../../models');




// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: 
      {
        model: Product
      }
    
  })
    .then((cData) => {
      if (!cData) {
        res.status(404).json({ message: "category not found" })
        return
      }
      res.json(cData)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
    console.log(`
             displaying all categories`)
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      `);
});





router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
     id: req.params.id
    },
    include: {
      model: Product
    }    
  })
    .then((cData) => {
      if (!cData) {
        res.status(404).json({ message: "category product not found" })
        return
      }
      res.json(cData);
    })
    .catch((err) => {
      console.log(err)
    res.status(500).json(err)
    })
  console.log(`
                 category found`)
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      `);
});



router.post('/', (req,res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then((cData) => {
    res.json(cData)
    })
    .catch((err) => {
    console.log(err)
    res.status(500).json(err);
    })
  
  console.log(`
                category created`)
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      
      `);
  
});



router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((cData) => {
      if (!cData) {
        res.status(404).json({ message: "category not found" });
        return;
      }
      res.json(cData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  console.log(`
                 category updated` );
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      
      `);
});





router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((cData) => {
    if (!cData) {
      res.status(404).json({ message: "category not found" })
      return
    }
      res.json(cData);
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
  console.log(`
                   category erase`)
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      
      `);
});

module.exports = router;
