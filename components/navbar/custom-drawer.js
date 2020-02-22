import { Drawer } from 'antd';

import Menu from './menu';

/**
 * Navbar drawer component for mobile screens.
 */
export default function CustomDrawer({ visible, onClose }) {
  return (
    <Drawer
      title="SSG vs SSR"
      placement="right"
      visible={visible}
      onClose={onClose}
    >
      <Menu onLinkClick={ e => onClose() } />
    </Drawer>
  );
}
