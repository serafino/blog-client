/* eslint-env mocha */
/* globals $hiddenArea */
import { expect } from 'chai';
import rivets from 'rivets';

import '../lib/components/my-component';

describe('My Component', () => {
  before(() => {
    $hiddenArea.appendChild(document.createElement('my-component'));
    rivets.bind(document.querySelector('my-component'), {});
  });

  after(() => {
    $hiddenArea.removeChild(document.querySelector('my-component'));
  });

  it('should also contain text "Hello world"', () => {
    const $myComponent = document.querySelector('my-component');
    expect($myComponent.innerHTML.trim()).to.equal('Hello world');
  });
});
