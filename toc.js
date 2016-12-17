var fs = require('fs');
var txt = fs.readFileSync('./README.md', 'utf8');

var arr = txt.match(/([^]*Table.of.Contents)([^]*)(##.General.notions[^]*)/);
console.log("arr",arr); // FIXME clean

function slugifyHeading(h){
  
}

(function (p1,body,p3) {

  var toc = body.match(/##.*/g).map(function (line) {
    var text = line.match(/#*\s+(.*)/)[1];


    return {line: line, text: text};
  });

  console.log("toc",toc); // FIXME clean

}.apply(null, arr));
