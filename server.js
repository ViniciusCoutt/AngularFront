const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;
const appName = 'angular-front'

app.use(express.static(__dirname + `/dist/${appName}`));

app.get('/*', (req, res) => {
  res.send(path.join(__dirname + `/dist/${appName}/index.html`))
});

app.listen(PORT, () => {
  console.log("Servidor iniciado na porta" + PORT);
})
