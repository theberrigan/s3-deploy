const chai = require('chai');
const expect = chai.expect;

const { shouldBeZipped } = require('../../src/deploy');

describe('#shouldBeZipped()', async () => {
  it('should return true for zippable file extensions', () => {
    const extensions = ['js', 'css', 'html'];
    expect(shouldBeZipped('/path/file.js', extensions)).to.equal(true);
  });

  it('should return false for all unknown extensions', () => {
    const extensions = ['js', 'css', 'html'];
    expect(shouldBeZipped('/path/file.mp4', extensions)).to.equal(false);
    expect(shouldBeZipped('/path/file.js.mp4', extensions)).to.equal(false);
    expect(shouldBeZipped('/path/file.', extensions)).to.equal(false);
  });
});
