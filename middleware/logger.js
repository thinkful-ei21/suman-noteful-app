'use strict';

const morgan = require('morgan');

//const logger = morgan(':date[iso] :method :url :response-time');

//const logger = morgan('common');
const logger = morgan('dev');
// app.use(morgan());
module.exports.logger = logger;