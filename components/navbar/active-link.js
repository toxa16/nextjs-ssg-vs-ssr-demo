import { useRouter } from 'next/router';

function ActiveLink({ href, label, isStatic = false }) {
  const router = useRouter();

  function handleClick(e) {
    if (!isStatic) {
      e.preventDefault();
      router.push(href);
    }
  }

  const { pathname } = router;
  let linkClassName = 'nav-link';
  if (pathname === href) {
    linkClassName += ' active';
  }

  return (
    <a
      href={href}
      className={linkClassName}
      onClick={handleClick}
    >
      { label }
    </a>
  );
}

export default ActiveLink;
