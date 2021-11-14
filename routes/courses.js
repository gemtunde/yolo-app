
const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const db = require('../config/db');
const  { v4: uuidV4} = require("uuid");

//**create course or NFTs */

router.post("/create", (req, res)=> {
    const {name,price, description}= req.body;
    console.log(name,price, description);

    //simple validation
    if(!name || !price || !description ) return res.status(400).json({msg:"please enter token details"});

    //slug
    let sqlCheck = `Select * from courses where slug = ?`;
    let sqlInsert = `INSERT INTO courses SET ? `;
    const slug = slugify(name).toLowerCase();

    db.query(sqlCheck, slug, (err, course) => {
        if(course.length > 0) return res.status(400).json({msg : "Course or token exists"});

        const data = {
            course_name : name.toLowerCase(),
            slug : slugify(name).toLowerCase(),
            uid: uuidV4(),
            price : price,
            description : description.toLowerCase(),
        };

        db.query(sqlInsert, data, (err, result)=> {
            if(err) return res.status(400).json({msg: "unable to insert token details"});
            return res.status(200).json({data});
        })
    })
})

//get a course or tokens
router.get("/",(req, res)=>{
    let getQuery = `SELECT * FROM courses`;

    db.query(getQuery, (err, results)=>{
       return  res.status(200).json(results);
    })
});

//update a course or token
router.put("/", (req, res) => {
    const { course_name,  slug } = req.body;
    const newSlug = slugify(course_name).toLowerCase();
  
 
  
    var updatedata =
      "UPDATE courses SET course_name = ?,  slug = ? WHERE slug = ?";
  
    db.query(
      updatedata,
      [
        course_name.toLowerCase(),
        newSlug,
        slug,
      ],
      function (error) {
        if (error) return res.status(400).json({ msg: "Unable to update" });
  
        res.status(200).json({ msg: "updated" });
      }
    );
  });
  

//delete a course or token
router.delete("/", (req, res) => {
    const { course_id } = req.body;
  
    let delQuery = "DELETE FROM courses WHERE course_id = ?";
    db.query(delQuery, [course_id], (err, result) => {
      if (err) {
        res.send(err).status(400);
      } else {
        res.json({ success: true }).status(200);
      }
    });
  });
  
module.exports = router ;