import Link from 'next/link';

/**
 * Homepage component.
 */
function Homepage() {
  return (
    <div>
      <h1 className="mb-4">Homepage</h1>

      <div className="row">
        <div className="col-12 col-lg-10 col-xl-8">
          <p className="font-weight-bold">
            Welcome to the SSG vs SSR Next.js demo app!
          </p>

          <p>
            You are now at the app <b>homepage</b>. This page doesn't fetch 
            any back-end data and represents a lightweight initial 
            page of a Next.js app.
          </p>

          <p>
            The <b>blog page</b> fetches list of articles from backend server. 
            It demonstrates and compares asynchronous article fetching from 
            the <Link href="/ssg/blog"><a>static page</a></Link> versus 
            the <a href="/ssr/blog">server-side rendered page</a>.
          </p>

          <p>
            This is a demo application for the <a href="https://antoncodes.com">Next.js 
            SSG vs SSR article series</a> from the AntonCodes blog.
          </p>
        </div>
      </div>
    </div>
  );
}

/*Homepage.getInitialProps = () => {
  return {};
}*/

export default Homepage;
