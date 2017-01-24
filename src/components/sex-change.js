import rivets from 'rivets';
import html from 'html-loader!./sex-change.html';

import './sex-change.scss';

rivets.components['sex-change'] = {
  template: () => html,
  initialize: () => ({ gender: 'M' })
};
