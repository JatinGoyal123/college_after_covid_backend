import Users from "../models/Users.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../Middleware/async.js";
export const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await Users.create({
    name,
    email,
    password,
    role,
  });
  sendTokenResponse(user, 200, res);
});
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  const user = await Users.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid Credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

const sendTokenResponse = (user, statusCode, res) => {
  // Create Token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};

export const getMe = asyncHandler(async (req, res, next) => {
  console.log(req.user.id);
  const user = await Users.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});
