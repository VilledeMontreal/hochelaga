var express = require('express');
var path = require('path');
var app = express();

var folder = '/';

var source = 'dist';

var port = 4200;


   
/*app.use(function(req,res,next) {
 	console.log('test ..... ');
	next();
});*/

app.use(folder, express.static(source, { redirect: false }));

app.get('*', function (req, res, next) {
    res.sendFile(path.resolve('./dist/boite-outils/index.html'));
});

app.get('*', function (err, req, res, next) {
	console.error('*' + err.stack);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  //res.status(500).send('Something broke!');
});

app.listen(port, function () {
  console.log('Lancement du serveur sur le port ' + port);
});


