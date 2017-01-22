import rivets from 'rivets';
import loadTemplate from '../load-template';

rivets.components['my-component'] = {
  template: () => loadTemplate('my-component'),
  initialize: () => ({ greeting: 'Hello world' }),
};
