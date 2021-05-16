import Arrival from "../models/arrival.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../Middleware/async.js";
import Users from "../models/Users.js";

export const postArrival = asyncHandler(async (req, res, next) => {
  req.body.user = req.params.userId;

  const user = await Users.findById(req.params.userId);
  if (!user) {
    return next(new ErrorResponse("User not found", 401));
  }
  const arrival = await Arrival.create(req.body);
  res.status(201).json({
    success: true,
    data: arrival,
  });
});

export const getArrival = asyncHandler(async (req, res, nect) => {
  const arrival = await Arrival.find();
  res.status(200).json({ success: true, data: arrival });
});
