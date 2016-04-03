
'use strict'

/**
 * pratice NOde.js project
 *
 * @author Iceee.Xu <iceee.xu@gmail.com>
 */

import validator from 'validator';

module.exports = function (done) {

  $.checkLogin = async function (req, res, next) {

    if (!(req.session.user &&req.session.user._id)) return next(new Error('please login firstly'));
    next();
  };

  done();
};
