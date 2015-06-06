'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'realizechange-secret',

  FACEBOOK_ID:      '1091820304167074',
  FACEBOOK_SECRET:  '32f0ae25df47bac88c1d37315cb370ac',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        '896121692354-s1ril20ljt2r34s4bifht3rv68ear05p.apps.googleusercontent.com',
  GOOGLE_SECRET:    'DPcFihaCiynWy5kTiZ2EX0T6',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
