import domReady from 'domready';
import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';

import './theme.scss';

domReady(() => {
  Reveal.initialize({
    center: true,
    controls: false,
    transition: 'slide',
    margin: 0.15
  });
});
