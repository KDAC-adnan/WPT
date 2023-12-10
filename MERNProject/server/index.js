const express=require('express');
const app=express();
const config=require('config'); 
const cors=require('cors');


const port=config.get('port');

//routes
const routeToProducts=require('./Routes/products');


app.use(cors());
app.use(express.json());

app.use("/product",routeToProducts);

app.listen(port,()=>{
    console.log(`Server started on port:${port}`);
});