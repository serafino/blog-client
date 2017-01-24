/* eslint-env mocha */
/* globals expect */
describe('Hello World', () => {
  it('Should equal "Hello World"', () => {
    expect('Hello World').to.equal('Hello World');
  });

  it('Should add text to the document', () => {
    document.body.appendChild(document.createTextNode('Hello World'));
    expect(document.querySelector('body').innerText).to.equal('Hello World');
  });
});
