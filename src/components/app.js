import rivets from 'rivets';
import html from 'html-loader!./app.html';

import './sex-change';

rivets.components['app'] = {
  template: () => html,
  initialize: () => {}
};
