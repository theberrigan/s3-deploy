s3-deploy
=======

NodeJS bash utility for deploying files to Amazon S3

## Usage

```
s3-deploy './dist/**' --cwd './dist/' --region AWS_REGION --bucket SOME_BUCKET_NAME
```

Deploys files found by the `./dist/**` glob patten to S3. Change `AWS_REGION` with the AWS region of your bucket and `SOME_BUCKET_NAME` with the name of your bucket where file files should end up.

You can also gzip the files before sending them, just add `--gzip` parameter.

## Commands

### Production build
```
npm run release
```

Runs eslint validation, runs all unit tests.

### Run all tests
```
npm test
```

Invokes all unit tests in the project.

### Generage coverage report
```
npm run coverage
```

Generates unit test coverage report.

### Run linting
```
npm run lint
```

Invokes eslint validation based on rules defined in the `.eslintrc` file.

## Releasing

- Commit changes to the repository on a separate branch,
- Bump version in package.json file, after you are done with your changes (remember about SemVer!),
- After you are done with your functionality, or if you think it is large enough, create a pull request with master branch to be peer reviewed,
- After changes are merged into master branch, checkout master branch, run tests one more time, and publish this package to npm repository.

## Changelog

### 0.2.0

**API additons**

- Adding new command line parameter `--gzip`. When this is added, all files will be gzipped before sending them to Amazon S3.

### 0.1.7

**Patch fixes**

- Updating the repository URL.

### 0.1.6

**Patch fixes**

- Adding ability to publish package from CircleCI.

### 0.1.5

**Bug fixes**

- Adding a missing `crypto` import in the utils.

### 0.1.4

**Patch fix**

- Publishing the package publicly.

### 0.1.3

**Bug fixes**

- Switching to a node script in .bin directory, as bash script doesn't work when it is used through the symlink.

### 0.1.2

**Bug fixes**

- Going back to babel pre-compilation, and adding an .sh script to run the command later on,
- Adding babel/polyfill to the package as we are using generators inside the command.

### 0.1.1

**Bug fixes**

- Fixed a bug which made teh package not run at all.

### 0.1.0

**API additions**

- Initial version of the project,
- Ability to deploy files in the given glob pattern to provided S3 bucket, on provided S3 region.
