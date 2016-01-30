'use strict';

/**
 * Function to instanciate a middleware that adds a .json(data, status) to
 * the response object. This allows for simple JSON response handling.
 */
function respondJson() {
  return (req, res, next) => {
    if (!res.json) {
      /* eslint-disable no-param-reassign */
      res.json = function sendJson(data, resultCode) {
        res.statusCode = resultCode || 200;
        res.setHeader('Content-Type', 'application/json');
        const responseStream = JSON.stringify(data);
        res.end(responseStream);
      };
      /* eslint-enable  no-param-reassign */
    }

    next();
  };
}

module.exports = respondJson;
