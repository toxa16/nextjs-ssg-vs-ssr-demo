const { oneLineTrim } = require('common-tags');

/**
 * Dummy article list.
 */
const articles = [
  {
    title: 'Lorem ipsum dolor sit amet',
    date: '2020-02-22',
    excerpt: oneLineTrim`
      Quisque non augue aliquet, porttitor diam ac, pharetra eros. 
      Duis ultricies, risus at maximus semper, tellus leo commodo 
      lacus, a ullamcorper magna tortor et velit. Cras in nunc 
      suscipit, sagittis massa vel, semper leo. Fusce sit amet 
      iaculis turpis.
    `,
  },
  {
    title: 'Proin vitae condimentum leo',
    date: '2020-02-21',
    excerpt: oneLineTrim`
      Sed malesuada molestie placerat. Aenean feugiat semper sem, 
      vitae eleifend lorem tempor eget. Nullam suscipit fermentum 
      orci, tempus pulvinar lorem congue ut. Curabitur turpis augue, 
      sagittis quis congue nec, finibus sed libero. Integer at elit 
      id ipsum mattis fringilla.
    `,
  },
  {
    title: 'Cras rutrum gravida suscipit',
    date: '2020-02-20',
    excerpt: oneLineTrim`
      Maecenas eu magna quis nisl feugiat tristique at sit amet sem. 
      In id ligula eu eros pretium sodales nec in est. Aenean ultrices 
      id diam nec fringilla. Duis consequat lorem non quam venenatis, 
      vehicula tincidunt est malesuada. Vivamus imperdiet arcu ligula. 
      Morbi viverra volutpat neque in blandit.
    `,
  },
];

module.exports = articles;
