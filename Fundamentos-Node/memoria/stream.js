const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf8');

const Transform = stream.Transform;

class Mayus extends Transform {
  super() {
  }

  _transform(chunk, codi, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
  }
}

util.inherits(Mayus, Transform);

// Mayus.prototype._transform() = function(chunk, codi, cb) {
//   chunkMayus = chunk.toString().toUpperCase();
//   this.push(chunkMayus);
//   cb();
// }

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);