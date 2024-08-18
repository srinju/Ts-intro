const express = require("express");
const app = express();

enum statusCodes {
    success = 200,
    notFound = 404,
    Error = 500
}

app.get("/" , (req,res) {
    if(!req.query.userId) {
        res.status(statusCodes.success).json({});
    }else {
        res.status(statusCodes.Error).json({});
    }
})

//.... so on 
