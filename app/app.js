var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var dataFileForTest = require('./data/myjsonfile.json');
//const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('appDataTest', dataFileForTest);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "Енеїда";
//app.locals.allEneida = dataFile.eneida;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/eneida'));
app.use(require('./routes/api'));
//app.use(express.methodOverride()); // поддержка put и delete


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});