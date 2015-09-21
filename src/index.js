import 'babel/polyfill';
import glob from 'glob';
import flatten from 'lodash/array/flatten';
import minimist from 'minimist';
import co from 'co';

import { deploy } from './deploy';

co(function *() {
  // Get arguments that were passed from the command line.
  const argv = minimist(process.argv.slice(2));

  // Create options object, based on command line arguments.
  const options = {
    bucket: argv.bucket,
    region: argv.r || argv.region || 'us-east-1',
    cwd: argv.cwd || '',
    gzip: (argv.gzip ? 'gzip' : undefined)
  };

  // Get paths of all files from the glob pattern(s) that were passed as the
  // unnamed command line arguments.
  const globbedFiles = flatten(argv._.filter(Boolean).map(function(pattern) {
    return glob.sync(pattern);
  }));

  console.log('Deploying files: %s', globbedFiles);
  console.log('> Target S3 bucket: %s (%s region)', options.bucket, options.region);
  console.log('> Gzip:', options.gzip);

  // Starts the deployment of all found files.
  return yield deploy(globbedFiles, options.cwd, {
    region: options.region
  }, {
    Bucket: options.bucket,
    ContentEncoding: options.gzip
  });
})
.then(() => {
  console.log('All files uploaded.');
})
.catch(err => {
  if (err.stack) {
    console.error(err.stack);
  } else {
    console.error(String(err));
  }

  process.exit(1); // eslint-disable-line
});
