const jwt =require("jsonwebtoken");

const verifyToken =(req,res,next)=>{
  const authHeader = req.headers.token;
  if (authHeader) {
      const token =authHeader.split(" ")[1];
      jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
          if(err) res.status(403).json("wrong Token");

          req.user =user;
          
          next();
      })
  } else {
      return res.status(401).json("you are not authorised")
  }
};


const verifyTokenAndAdmin =(req,res,next)=>{
  verifyToken(req,res,()=>{
      if(req.user.isAdmin){
           next();
      }else{
          res.status(403).json("you are not authorised")
      }
  })
}


    module.exports ={
      verifyTokenAndAdmin
    }