'use strict'

/**
 * pratice NOde.js project
 *
 * @author Iceee.Xu <iceee.xu@gmail.com>
 */

import mongoose from 'mongoose';

 module.exports = function (done) {
   const conn = mongoose.createConnection($.config.get('db.mongodb'));
   $.mongodb = conn;
   $.model = {};

   done();
 }
