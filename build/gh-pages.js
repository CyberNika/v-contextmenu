const ghpages = require('gh-pages')

ghpages.publish('sites', (err) => {
  err && console.log(err)
})
