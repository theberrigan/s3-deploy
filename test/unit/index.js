const chai = require('chai');
const expect = chai.expect;

const { parseCliArgsToOptions } = require('../../src/index');

describe('#parseCliArgsToOptions()', () => {
  describe('--gzip', async () => {
    it('should be true if present', () => {
      expect(parseCliArgsToOptions([0, 0, '--gzip']).gzip).to.equal(true);
    });

    it('should be array if arg is given', () => {
      expect(parseCliArgsToOptions([0, 0, '--gzip', 'js,css,html']).gzip).to.deep.equal(['js', 'css', 'html']);
    });
  });
});
