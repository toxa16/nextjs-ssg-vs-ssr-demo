import { useState } from 'react';
import Link from 'next/link';

import Menu from './menu';
import CustomDrawer from './custom-drawer';

/**
 * Navbar component.
 */
export default function Navbar() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm navbar-light container">
      <Link href="/">
        <a className="navbar-brand">SSG vs SSR</a>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        onClick={ () => setDrawerVisible(true) }
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <div className="ml-auto">
          <Menu />
        </div>
      </div>

      <CustomDrawer
        visible={isDrawerVisible}
        onClose={ () => setDrawerVisible(false) }
      />
    </nav>
  );
}
