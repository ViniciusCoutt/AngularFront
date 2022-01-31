const express = require('express');
const app = express();
const path = require('path');

const appName = 'angular-front'

app.use(express.static(__dirname + `/dist/${appName}`));

app.get('/*', (req, res) => {
  res.send(path.join(__dirname + `/dist/${appName}/index.html`))
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})
