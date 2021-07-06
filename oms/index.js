const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/product',require('./routes/product'));
app.use('/order',require('./routes/order'));
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});