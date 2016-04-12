import domReady from 'domready';
import React from 'react';
import {render} from 'react-dom';

import Header from './header';
import './style.scss';

domReady(() => {
  const node = document.getElementById('app');
  render(<Header/>, node);
});
