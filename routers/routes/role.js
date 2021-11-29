const { Router } = require("express");
const express=require("express");
const {createRole,getRole}=require("./../controllers/role")
const routerRole=express.Router();
routerRole.post("/createRole",createRole);
routerRole.get("/getRole",getRole);
module.exports=routerRole;