const roleModel=require("./../../db/models/role");
const createRole=(req,res)=>{
    const {role,permissions}=req.body
    const newRole=new roleModel({
        role,permissions
    })
    newRole.save().then(result=>{
        res.status("201").json(result);
    }).catch(err=>{
        res.status("404").json(err);
    })
};
const getRole=(req,res)=>{

};

module.exports={createRole,getRole};