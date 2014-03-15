var 
express     = require('express'),
http        = require('http'),
fs          = require('fs'),
exec        = require('child_process').exec,
app         = express(),
server      = http.createServer(app),
port        = 8080,
components  = [],
folder;

app.set('view engine', 'jade'); 
app.set('view options', { layout: true }); 
app.set('views', __dirname + '/views');


// API
//
app.get('/', function (req, resp) {
    resp.render('index', {
        path: folder,
        components: components,
        framework: 'platform'
    });
});

app.get('/api/components', function (req, resp) {
    resp.json(components);
});

app.use(express.static(__dirname+'/static'));

// fn
// 
var usage = function () {
    console.log('usage: preview.js folder')
};

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

// __main__
//
// get parameters
folder = process.argv[2];
if (!folder) {
    usage();
    process.exit();
}

// read components
try {
    var files = fs.readdirSync(folder),
        i;
    for (i=0; i<files.length; i++) {
        if (files[i].endsWith('.html')) {
            components.push(files[i].split('.html')[0]);
        }
    }
}
catch (e) {
    console.log(e.toString())
    process.exit();
}


// Running the server...
//
server.listen(port);
console.log('Listening on port ' + port);
exec('open http://localhost:' + port);
