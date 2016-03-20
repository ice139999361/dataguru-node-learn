'use strict'

/**
 * pratice NOde.js project
 * @author Iceee.Xu <iceee.xu@gmail.com>
 */

 import path from 'path';
 import ProjectCore from 'project-core';

 const $ = global.$ = new ProjectCore();


 // 加载配置文件
 $.init.add((done) => {
   $.config.load(path.resolve(__dirname, 'config.js'));
   const env = process.env.NODE_ENV || null;
   if (env) {
     $.config.load(path.resolve(__dirname, '../config', env + '.js'));
   }
   $.env = env;
   done();
 });

$.init((err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    console.log('inited');
  }
});
