var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '../build'), {
  branch: 'master',
  repo: 'git@github.com:techsHQ/techsHQ.github.io.git',
  message: 'Update website'
}, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Deployed successfully.')
  }
});
