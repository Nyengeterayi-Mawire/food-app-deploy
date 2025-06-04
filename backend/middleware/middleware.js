const request = (req,res,next) => {
    console.log(`path : ${req.path} --- method : ${req.method}`);
    next()
};

const authenticate = (req,res,next) => {   
    next()
};

module.exports = {request,authenticate};
