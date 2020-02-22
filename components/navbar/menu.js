import ActiveLink from './active-link';

/**
 * Navbar menu component.
 */
export default function Menu({ onLinkClick }) {
  return (
    <ul className="navbar-nav">
      <li className="nav-item" onClick={onLinkClick}>
        <ActiveLink
          href="/ssg/blog"
          label="Blog SSG"
        />
      </li>

      <li className="nav-item">
        <ActiveLink
          href="/ssr/blog"
          label="Blog SSR"
          isStatic
        />
      </li>

      <li className="nav-item" onClick={onLinkClick}>
        <ActiveLink
          href="/metrics"
          label="Metrics"
        />
      </li>
    </ul>
  );
}
