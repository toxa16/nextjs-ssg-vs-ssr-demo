import { useState, useEffect } from 'react';

import Blog from '../../components/blog';
import fetchArticles from '../../lib/fetch-articles';

/**
 * SSG blog page component.
 */
export default function BlogSSG() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    // defining and calling async function inside useEffect
    (async function() {
      const _articles = await fetchArticles();
      setArticles(_articles);
    })();
  }, []);

  return <Blog articles={articles} />;
}
