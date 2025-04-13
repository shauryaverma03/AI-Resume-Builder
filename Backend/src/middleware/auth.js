import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const isUserAvailable = async (req, res, next) => {
  let { token } = req.cookies;

  if (!token) {
    return res.status(404).json(new ApiError(404, "User not authenticated."));
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(404).json(new ApiError(404, "User not found."));
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("Error verifying token:", err);
    return res.status(500).json(new ApiError(500, "Internal Server Error.", [], err.stack));
  }
};

export { isUserAvailable };
