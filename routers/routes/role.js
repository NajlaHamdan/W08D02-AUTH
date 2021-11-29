const { Router } = require("express");
const express=require("express");
const {createRole}=require("./../controllers/role")
const routerRole=express.Router();
routerRole.post("/createRole",createRole);

module.exports=routerRole;