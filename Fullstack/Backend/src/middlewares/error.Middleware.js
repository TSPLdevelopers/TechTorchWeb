const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  let status = err.statusCode || (res.statusCode >= 400 ? res.statusCode : 500);
  let message = err.message || "Internal Server Error";

  if (err.name === "ValidationError") {
    status = 400;
    message = Object.values(err.errors).map((e) => e.message).join(", ");
  } else if (err.name === "CastError") {
    status = 400;
    message = "Invalid ID format";
  } else if (err.code === 11000) {
    status = 409;
    message = "Duplicate value: record already exists";
  }

  res.status(status).json({ success: false, message });
};

module.exports = errorMiddleware;