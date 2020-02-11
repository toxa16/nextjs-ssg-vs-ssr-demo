import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light container">
      <Link href="/">
        <a className="navbar-brand">SSG vs SSR</a>
      </Link>
    </nav>
  );
}
