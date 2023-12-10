const express=require('express');
const app=express.Router();
const mysql=require('mysql');
const config=require('config'); 

const connectionDetails={
    host:config.get('host'),
    database:config.get('database'),
    user:config.get('uname'),
    password:config.get('password')
};

app.get("/",(request,response)=>{
    console.log("GET request recieved");
    const stmt='select * from products';
    console.log(`Query is :${stmt}`);
    const connection=mysql.createConnection(connectionDetails);
    connection.query(stmt,(error,result)=>{
        if(error==null)
        {
            response.send(result);
            connection.end();
        }
        else
        {
            response.send(error);
            connection.end();
        }
    })
});

app.post("/",(request,response)=>{
    console.log("POST request recieved");
    const stmt=`insert into products values(default,"${request.body.producttitle}",${parseInt(request.body.price)},${parseInt(request.body.stock)})`;
    console.log(`Query is:${stmt}`);
    const connection=mysql.createConnection(connectionDetails);
    connection.query(stmt,(error,result)=>{
        if(error==null)
        {
            response.send(result);
            connection.end();
        }
        else
        {
            response.send(error);
            connection.end();
        }
    });
});

app.put("/:No",(request,response)=>{
    console.log(`PUT request is recieved`);
    console.log(`No is recieved is:${request.params.No}`);
    const stmt =`update products set producttitle="${request.body.producttitle}",price=${parseFloat(request.body.price)},stock=${parseInt(request.body.stock)} where productid=${parseInt(request.params.No)}`;
    console.log(`Query is:${stmt}`);
    const connection=mysql.createConnection(connectionDetails);
    connection.query(stmt,(error,result)=>{
        if(error==null)
        {
            response.send(result);
            connection.end();
        }
        else
        {
            response.send(error);
            connection.end();
        }
    });
});

app.delete("/:No",(request,response)=>{
    console.log(`DELETE request is recieved`);
    console.log(`No is recieved is:${request.params.No}`);
    const stmt=`delete from products where productid=${parseInt(request.params.No)}`;
    const connection=mysql.createConnection(connectionDetails);
    connection.query(stmt,(error,result)=>{
        if(error==null)
        {
            response.send(result);
            connection.end();
        }
        else
        {
            response.send(error);
            connection.end();
        }
    });
});


module.exports=app;