/* eslint-env jasmine */
/* globals expect */
describe('Hello World', () => {
  it('Should equal "Hello World"', () => {
    expect('Hello World').toEqual('Hello World');
  });

  it('Should add text to the document', () => {
    document.body.appendChild(document.createTextNode('Hello World'));
    expect(document.querySelector('body').innerText).toEqual('Hello World');
  });
});
