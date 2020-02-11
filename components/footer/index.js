export default function Footer() {
  return (
    <footer className="container py-3">
      <div className="row">
        <div className="col-12 col-sm-6 text-center text-sm-left">
          <span className="text-secondary">
            &copy; Copyright { (new Date()).getFullYear() } Anton
          </span>
        </div>
        <div className="col-12 col-sm-6 text-center text-sm-right">
          <a href="https://antoncodes.com">antoncodes.com</a>
        </div>
      </div>
    </footer>
  );
}
