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
            any back-end data and represents a <i>lightweight initial 
            page</i> of a Next.js app.
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
