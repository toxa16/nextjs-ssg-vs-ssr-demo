import ArticleCard from './article-card';
import Loading from './loading';

export default function Blog({ articles }) {
  function renderArticles() {
    return articles.map((x, i) => (
      <div key={i} className="col-12 col-lg-6 mb-3">
        <ArticleCard {...x}></ArticleCard>
      </div>
    ));
  }

  function renderContent() {
    if (!articles) {
      return <Loading />;
    }
    return (
      <div className="row">
        { renderArticles() }
      </div>
    );
  }

  return (
    <div>
      <h1 className="mb-4">Blog</h1>

      <div>
        { renderContent() }
      </div>
    </div>
  );
}
