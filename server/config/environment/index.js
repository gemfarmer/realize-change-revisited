'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================

console.log(process.env)
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'realize-change-secret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  facebook: {
    clientID:     process.env.FACEBOOK_ID || '1091820304167074',
    clientSecret: process.env.FACEBOOK_SECRET || '32f0ae25df47bac88c1d37315cb370ac',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },
  facebook_dev: {
    clientID:     process.env.FACEBOOK_ID || '1110526725629765',
    clientSecret: process.env.FACEBOOK_SECRET || 'da55bc76ae3d0b43a7c76555af9f682c',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },

  twitter: {
    clientID:     process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
  },

  google: {
    clientID:     process.env.GOOGLE_ID || '896121692354-s1ril20ljt2r34s4bifht3rv68ear05p.apps.googleusercontent.com',
    clientSecret: process.env.GOOGLE_SECRET || 'DPcFihaCiynWy5kTiZ2EX0T6',
    callbackURL:  (process.env.DOMAIN || '') + '/auth/google/callback'
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});