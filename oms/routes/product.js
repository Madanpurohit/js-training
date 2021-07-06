const express=require('express');
const router=express.Router();
const products=require('../data/products');
router.get('/',(req,res)=>{
    res.json(products);
});
router.get('/fatchproduct/:cat',(req,res)=>{
    var ans=[];
    products.forEach((ele)=>{
        if(ele.category==req.params.cat) ans.push(ele);
    });
    if(ans.length==0){
        return res.status(400).send({
            message:'invalid catageory'
        })
    }
    res.json(ans);
});
router.get('/fatchproductdetails/:id',(req,res)=>{
    products.forEach((ele)=>{
        if(ele.id==parseInt(req.params.id)) return res.json(ele);
    })
    return res.status(400).send({
        message:'invalid id'
    })
})
module.exports=router;