'use strict';

const morgan = require('morgan');

const logger = morgan(':date[iso] :method :url :response-time');

// app.use(morgan());
module.exports.logger = logger;