

var commands = require('./commands.js');
process.stdout.write('prompt >');
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();
  var arr = cmd.split(' ');
  commands[arr[0]](arr.slice(1));
});

1234
1234
1234
