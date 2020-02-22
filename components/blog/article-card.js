/**
 * Article card component.
 */
export default function ArticleCard({ title, date, excerpt }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-2">
          <span className="h4 font-weight-bold">{ title }</span>
        </div>

        <div className="mb-2">
          <span className="text-secondary">
            { date }
          </span>
        </div>

        <div>{ excerpt }</div>
      </div>
    </div>
  );
}
