const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @des         Get All
// @route       GET /endpoint
// @access      Private/Admin
exports.getAll = asyncHandler(async (req, res, next) => {
  getChange(5, 0.99);
  res.status(200).json({ success: true });
});
