// initialise our api 

import { MongoClient } from "mongodb";

const express = require('express')
const body = require("body-parser")


//start function run every time we run our code

async function start (){
    try{
        const app = express ();

        const mongo = await MongoClient.connect('mongodb://localhost:27017/crm_api');
        await mongo.connect();

        app.db = mongo.db();

        //body parser

        app.use(body.json({
            limit:"500kb"
        }))

        //routes

        app.use('/customers',require('./require/customers'))


        //start server

        app.listen(3000, () => {
            console.log(`Server is running on port 3000`)
        })
        
    }catch(err){
        })
    }catch(error){
        console.log(error)
    };
    

}

start();