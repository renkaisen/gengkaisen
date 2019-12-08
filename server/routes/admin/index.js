module.exports = app =>{
    const express = require('express')
    const router = express.Router();

    const Category = require('../../models/category')

    router.post('/Category', async (req,res)=>{

       const model =  await Category.create(req.body)
       res.send(model)
   
    })

    app.use('/admin/api',router)
}