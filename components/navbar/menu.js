import ActiveLink from './active-link';

export default function Menu() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <ActiveLink
          href="/metrics"
          label="Metrics"
        />
      </li>
    </ul>
  );
}
