import Link from 'next/link';

import Menu from './menu';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light container">
      <Link href="/">
        <a className="navbar-brand">SSG vs SSR</a>
      </Link>

      <div className="collapse navbar-collapse">
        <div className="ml-auto">
          <Menu />
        </div>
      </div>
    </nav>
  );
}
