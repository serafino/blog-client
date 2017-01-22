/* eslint-env mocha */
/* globals $hiddenArea */
import { expect } from 'chai';

describe('Main page', () => {
  let $span = {};

  before(() => {
    $span = document.createElement('span');
    $span.innerHTML = 'Hello world!';
    $span.id = 'hello-world';
    $hiddenArea.appendChild($span);
  });

  after(() => {
    $hiddenArea.removeChild($span);
  });

  it('should contain text "Hello world"', () => {
    expect(document.querySelector('#hello-world').innerHTML).to.equal('Hello world!');
  });
});
