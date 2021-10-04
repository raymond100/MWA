exports.validateRequest = (req, count = 6, offset = 0, maxCount = 10) => {
  const error = { name: 'Bad request', status: 400 };

  // user input exist
  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }
  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);
  }
  // user input numbers
  if (isNaN(count) || isNaN(offset)) {
    error.message = 'QueryString Offset and Count should be numbers';
  }
  // limit check
  if (count > maxCount) {
    error.message = `Cannot exceed count of ${maxCount}`;
  }

  if (error.message) {
    return { error };
  } else {
    return {
      count,
      offset,
    };
  }
};
