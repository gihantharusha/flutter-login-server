const express = require("express");

const app = express();

app.use(express.json());

app.get("/getUsers", (req,res)=>{
    res.json({
        "result":[
            {
                "name": "gihan",
                "age": "12",
                "email": "gihan@gmail.com"
            },
            {
                "name": "kamal",
                "age": "15",
                "email": "kamal@gmail.com"
            },
            {
                "name": "nimal",
                "age": "16",
                "email": "nimal@gmail.com"
            },
            {
                "name": "amal",
                "age": "16",
                "email": "amal@gmail.com"
            },
            {
                "name": "sunil",
                "age": "16",
                "email": "sunil@gmail.com"
            },
            {
                "name": "amara",
                "age": "16",
                "email": "amara@gmail.com"
            },
        ]
    });
});

app.post("/addUsers", (req,res)=>{
    res.json({
        "result":[
            {
                "name": "gihan",
                "age": "12",
                "email": "gihan@gmail.com"
            },
            {
                "name": "kamal",
                "age": "15",
                "email": "kamal@gmail.com"
            },
            {
                "name": "nimal",
                "age": "16",
                "email": "nimal@gmail.com"
            },
            {
                "name": "amal",
                "age": "16",
                "email": "amal@gmail.com"
            },
            {
                "name": "sunil",
                "age": "16",
                "email": "sunil@gmail.com"
            },
            {
                "name": "amara",
                "age": "16",
                "email": "amara@gmail.com"
            },
        ]
    });
});

app.listen(3001,()=>console.log("Server is running"));