const ghpages = require('gh-pages')

ghpages.publish('sites', (err) => {
  console.log(err)
})
