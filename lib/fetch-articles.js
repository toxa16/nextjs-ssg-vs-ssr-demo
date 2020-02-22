import fetch from 'isomorphic-unfetch';

/**
 * Article fetching helper function.
 * 
 * @param {string} baseUrl backend server base URL
 */
async function fetchArticles(baseUrl = process.env.BACKEND_URL) {
  console.log('Fetching articles...');
  const res = await fetch(`${baseUrl}/articles`);
  return await res.json();
}

export default fetchArticles;
