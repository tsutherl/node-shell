//console.log(Object.keys(process))
//console.log(process.argv)

// Output a prompt
process.stdout.write('prompt : this is a mini terminal inside of terminal :) enter a command');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var input = cmd.split(' ');
  if(cmd === 'pwd'){

    process.stdout.write(process.mainModule['paths'][0]);
  } else if (cmd === 'date') {
    var date = new Date();
    process.stdout.write(date.toString());
  } else if (input[0] === 'cat') {
    //print the entire file

  } else if (input[0] === 'head') {
        //print first 10 lines
  }

  process.stdout.write('\nprompt > ');

});

