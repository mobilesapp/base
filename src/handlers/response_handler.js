const sendResponse = (res, statusCode, success, message, data = null, errors = []) => {
    return res.status(statusCode).json({
      statusCode,
      success,
      message,
      data,
      errors
    });
  };
  
  module.exports = sendResponse;