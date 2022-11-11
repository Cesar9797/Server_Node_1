const handleError = (error, req, res, next) => {
  const {status, errorContent} = error;
  res.status(status).json({
    message: 'Algo salió mal',
    error: errorContent.message
  })
};

module.exports = handleError;