const express=require('express');
const router=express.Router();
const orders=require('../data/orders');
const users=require('../data/users');
const products=require('../data/products');
router.post('/placeorder',(req,res)=>{
    //user id finding and validation
    if(!req.body.userId){
        return res.status(400).send({
            message:'invalid userId'
        });
    };
    var isUserIdAvaliable=false;
    var user;
    users.forEach((ele)=>{
        if(ele.id===parseInt(req.body.userId)) isUserIdAvaliable=true,user=ele;
    })
    if(!isUserIdAvaliable){
        return res.status(400).send({
            message:'id not found'
        })
    }
    //product id finding and validation
    if(!req.body.ProductId){
        return res.status(400).send({
            message:'invalid ProductId'
        });
    };
    var isProductIdAvaliable=false;
    var product;
    products.forEach((ele)=>{
        if(ele.id===parseInt(req.body.ProductId)) isProductIdAvaliable=true,product=ele;
    })
    if(!isProductIdAvaliable){
        return res.status(400).send({
            message:'id not found'
        })
    };
    var newOrder={
        id:orders.length,
        orderNumber:orders.length,
        orderDate:new Date(),
        userId:user.id,
        productId:product.id,
        quantity:req.body.totalQuantity,
        total_amount:req.body.totalQuantity*(product.price)
    };
    orders.push(newOrder);
    res.json(newOrder);

})
router.get('/fatchallorder',(req,res)=>{
    res.json(orders);
})
//fatch order details
router.get('/fatchorderdetails/:id',(req,res)=>{
    orders.forEach((ele)=>{
        if(ele.id==parseInt(req.params.id)) return res.json(ele);
    })
    return res.status(400).send({
        message:'id not found or invalid orderid'
    });
})
router.get('/fatchorderbydate',(req,res)=>{
    var ans=[];
    var fromDate=Date.parse(req.query.fromDate);
    var toDate=Date.parse(req.query.toDate)
    console.log(fromDate,toDate)
    orders.forEach((ele)=>{
        var orderDate=ele.orderDate;
        if(fromDate<=ele.orderDate.getTime()&&toDate>=ele.orderDate.getTime()) ans.push(ele);
    });
    return res.json(ans);
})

module.exports=router;