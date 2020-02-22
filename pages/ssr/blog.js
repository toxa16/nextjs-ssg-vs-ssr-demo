import Blog from '../../components/blog';
import fetchArticles from '../../lib/fetch-articles';

/**
 * SSR blog page component.
 */
function BlogSSR({ articles }) {
  return <Blog articles={articles} />;
}

BlogSSR.getInitialProps = async () => {
  const articles = await fetchArticles();
  return { articles };
}

export default BlogSSR;
