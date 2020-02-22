import ActiveLink from './active-link';

export default function Menu() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
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

      <li className="nav-item">
        <ActiveLink
          href="/metrics"
          label="Metrics"
        />
      </li>
    </ul>
  );
}
