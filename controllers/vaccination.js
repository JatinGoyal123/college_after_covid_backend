import VaccinationStatus from "../models/vaccinationStatus.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../Middleware/async.js";
import Users from "../models/Users.js";

export const postVaccination = asyncHandler(async (req, res, next) => {
  req.body.user = req.params.userId;

  const user = await Users.findById(req.params.userId);
  if (!user) {
    return next(new ErrorResponse("User not found", 401));
  }
  const vaccination = await VaccinationStatus.create(req.body);
  res.status(201).json({
    success: true,
    data: vaccination,
  });
});

export const getVaccination = asyncHandler(async (req, res, nect) => {
  const vaccination = await VaccinationStatus.find();
  res.status(200).json({ success: true, data: vaccination });
});
