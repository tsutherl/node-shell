const fs = require('fs');
var exports = module.exports = {};

//console.log(Object.keys(process))
//console.log(process.argv)

// Output a prompt

module.exports = {
  pwd: function() {
      process.stdout.write(process.mainModule['paths'][0]);
      process.stdout.write('\nprompt > ');
    
  },
  date: function() {
    var date = new Date();
    process.stdout.write(date.toString());
    process.stdout.write("\nprompt > ");
  },
  cat: function(inputArr) {
    fs.readFile(fileName, (err, data) => {
      if(err) throw err;
        process.stdout.write(data);
    });
    process.stdout.write("\nprompt > ");
  },
  head: function(inputArr) {
    fs.readFile(inputArr[0], (err, data) => {
      if(err) throw err;
      var line = data.toString().split('\n');
      var length = line.length;
      var count;
      if (length < 10) {
        count = length;
      } else {
        count = 10;
      }
      for (var i = 0; i < count; i++) {
          process.stdout.write(line[i] + '\n');
      }

    });
    process.stdout.write("\nprompt > ");
  },
  ls: function() {
    fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
    process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("\nprompt > ");
  });
  },
  echo: function(inputArr) {
    var returnStr = inputArr.join(' ');
    process.stdout.write(returnStr);
    process.stdout.write("\nprompt > ");
  },
  tail: function(inputArr) {
    fs.readFile(inputArr[0], (err,data) => {
      if (err) throw err;
      var line = data.toString().split('\n');
      var lines = line.length;
      var i;
      if (lines < 5) {
        i = 0;
      } else {
        i = lines - 5;
      }
      for (;i < lines; i++) {
        process.stdout.write('\n' + line[i]);
      }
    });
    process.stdout.write("\nprompt > ");
  },
  sort: function(inputArr) {
    
  }
  
};
//process.stdout.write('prompt : this is a mini terminal inside of terminal :) enter a command \n');

// The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline
//   var input = cmd.split(' ');
//   if(cmd === 'pwd'){

//     process.stdout.write(process.mainModule['paths'][0]);

//   } else if (cmd === 'date') {
//     var date = new Date();
//     process.stdout.write(date.toString());
//   } else if (input.includes('head') && input.includes('|')){
//       fs.readFile(input[1], (err, data) => {
//       if(err) throw err;
//       var line = data.toString().split('\n');
//         for (var i = 0; i < 10; i++) {
//           process.stdout.write(line[i] + '\n');
//         }
//       });

//   } else if (input[0] === 'cat') {
//     //print the entire file

//     fs.readFile(input[1], (err, data) => {
//       if(err) throw err;
//         process.stdout.write(data);
    
//     });


//   } else if (input[0] === 'head') {
//         //print first 10 lines
//     fs.readFile(input[1], (err, data) => {
//       if(err) throw err;
//       var line = data.toString().split('\n');
//       for (var i = 0; i < 10; i++) {
//         process.stdout.write(line[i] + '\n');
//       }
      
    
//     });
//   } 

//   process.stdout.write('\nprompt > ');

// });

