const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: {
        category: "category_name",
      },
      order: "DESC",
    },
  })
    .then((tData) => {
      if (!tData) {
        res.json(404).json({ message: "invalid tag" });
        return;
      }
      res.json(tData);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
  console.log(`
                    tags found`);
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      
      `);
});



router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: {
        category: "category_name",
      },
    },
  })
    .then((tData) => {
      if (!tData) {
        res.status(404).json({ message: "tag not found" });
        return;
      }
      res.json(tData);
    })
    .catch((err) => {
      res.json(500).json(err);
    });
  console.log(`
                   tag id loaded`);
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      
      `);
});



router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((tData) => {
      res.json(tData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  console.log(`
                    tag created`)
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      
      `);
});



router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id,
      },
    },
    
  )
    .then((tData) => {
      if (!tData) {
        res.status(404).json({ message: "tag id not found" });
        return;
      }
      res.json(tData);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json(err);
    })
  console.log(`
                    tag updated`)
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      
      `);
});



router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((tData) => {
      if (!tData) {
        res.status(404).json({ message: "invalid tag number" })
        return
    }
    res.json(tData)
    })
    .catch((err) => {
      console.log(err)
    res.json(404).json(err)
    })
  console.log(`
                    tag deleted`)
  console.log(`
      ,---.              |             
      |  _.,---.,---.,---|  ,---, ,___, ,---. |
      |   ||   ||   ||   |  |   | |   | |---' |
      '---''---''---''---'  '---' '   ' '---' o
      
      
      `);
});

module.exports = router;
