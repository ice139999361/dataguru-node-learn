'use strict'

/**
 * pratice NOde.js project
 *
 * @author Iceee.Xu <iceee.xu@gmail.com>
 */

import path from 'path';

module.exports = function (done) {

  $.router.get('*', function (req, res, next) {
    if (req.url.indexOf('/api/') !== 0 && req.url.indexOf('/build/') !== 0) {
      console.log(123)
      // res.end(`现在是北京时间${new Date()}`);
      res.sendFile(__dirname, '../../frontend/index.html');
    } else {
      next();
    }
  });

  done();

};
