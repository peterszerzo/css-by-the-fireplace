import React from 'react';

import Button from './button';
import headerStyles from './header-styles';

export default function Header(props) {
  return (
    <header style={headerStyles.base}>
      <nav style={headerStyles.nav}>
        <Button style={headerStyles.button} label='may'/>
        <Button style={headerStyles.button} label='turn'/>
        <Button style={headerStyles.button} label='orange'/>
      </nav>
    </header>
  );
}
