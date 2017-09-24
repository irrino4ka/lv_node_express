var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "Енеїда";
//app.locals.allEneida = dataFile.eneida;


app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/eneida'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});