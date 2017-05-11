var shell = require('shelljs');

shell.cp('-R', '../meteor/_BUNDLE/*', './dist/meteor/');
