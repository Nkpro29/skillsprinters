import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    return res.status(208).json({
      isError: true,
      authError: true,
      message: "failed no token",
    });
  }

  const token = req.get('Authorization').split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(208).json({
        isError: true,
        authError: true,
        message: "failed not good",
      });
  }

  if(!decodedToken){
    return res.status(208).json({
        isError: true,
        authError: true,
        message: "failed token expire.",
      });
  }

  req.userId = decodedToken.id;

  next();

};

export default isAuth;
