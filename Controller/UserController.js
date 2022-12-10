const catchAsyncErrors=require('../middleware/CatchAsyncError')
const User=require("../models/UserModel")

exports.registerUser = catchAsyncErrors(async (req, res, next) => {


  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  
  });


});

exports.loginUser=catchAsyncErrors(async(req,res,next)=>{
  const {name,email}=req.body;
  
})
  