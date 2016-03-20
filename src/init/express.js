'use strict'

/**
 * pratice NOde.js project
 *
 * @author Iceee.Xu <iceee.xu@gmail.com>
 */
import path from 'path';
import express from 'express';
import serveStatic from 'serve-static';
import bodyParser from 'body-parser';
import multiparty from 'multiparty';

module.exports = function (done) {

  const debug = $.createDebug('init:express');
  debug('initing Express...');

  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  const router = express.Router();
  $.router = router;

  app.use(router);
  app.use('/static', serveStatic(path.resolve(__dirname, '../../static')));

console.log($.config.get('web.port'));
  app.listen($.config.get('web.port'), (err) => {
    done(err);
  });

};
