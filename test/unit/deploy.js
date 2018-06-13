const chai = require('chai');
const expect = chai.expect;

const { shouldBeZipped } = require('../../src/deploy');

describe('#shouldBeZipped()', async () => {
  it('should return true for all if --gzip', () => {
    const gzip = true;
    expect(shouldBeZipped('/path/file.js', gzip)).to.equal(true);
    expect(shouldBeZipped('/path/file.mp4', gzip)).to.equal(true);
    expect(shouldBeZipped('/path/file.js.mp4', gzip)).to.equal(true);
    expect(shouldBeZipped('/path/file.', gzip)).to.equal(true);
  });

  it('should return false if no --gzip', () => {
    expect(shouldBeZipped('/path/file.js', undefined)).to.equal(false);
    expect(shouldBeZipped('/path/file.js', false)).to.equal(false);
    expect(shouldBeZipped('/path/file.js', 'false')).to.equal(false);
  });

  it('should return true for provided file extensions --gzip js,css,html', () => {
    const gzip = ['js', 'css', 'html'];
    expect(shouldBeZipped('/path/file.js', gzip)).to.equal(true);
  });

  it('should return false for all unknown extensions --gzip js,css,html', () => {
    const gzip = ['js', 'css', 'html'];
    expect(shouldBeZipped('/path/file.mp4', gzip)).to.equal(false);
    expect(shouldBeZipped('/path/file.js.mp4', gzip)).to.equal(false);
    expect(shouldBeZipped('/path/file.', gzip)).to.equal(false);
  });
});
