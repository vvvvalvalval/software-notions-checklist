// run this file to write the table of contents in README.md
var fs = require('fs');
var _ = require('underscore');
var txt = fs.readFileSync('./README.md', 'utf8');

var arr = txt.match(/([^]*Table.of.Contents\s*)([^]*)(##.General.notions[^]*)/);

function slugifyHeading(h){
  return h.toLowerCase().replace(/[^\w\s]+/g,'').replace(/\s/g,'-');
}

function repeat(n, v){
  return _.range(n).map(_.constant(v));
}

(function (_all,p1,p2,body) {

  var toc = body.match(/##.*/g)
    .map(function (line) {
      var text = line.match(/#*\s+(.*)/)[1];
      var anchor = slugifyHeading(text);
      var level = line.match(/(#+)\s.*/)[1].length;

      return {line: line, text: text, anchor: anchor, level: level};
    })
    .map(function (m) {
      return repeat(m.level - 2, '  ').join('') + '* [' + m.text + '](#' + m.anchor + ')';
    })
    .join('\n');

  var out = p1 + toc + '\n\n' + body;
  fs.writeFileSync('./README.md', out, {encoding: 'utf8'});

}.apply(null, arr));
