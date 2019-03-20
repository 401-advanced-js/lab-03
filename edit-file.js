'use strict';

const fs = require('fs');
const faker = require('faker');

fs.readFile(process.argv[2], (err, data) => {
  if(err) {console.log(err); return;}
  let content = data.toString();
  console.log('\nThe file before adding a number:\n\n', content);
  let randomNumber = faker.random.number(10);
  fs.writeFile(process.argv[2], Buffer.from(content+randomNumber), (err,data) => {
    if(err){console.log(err); return;}
    console.log('\n');
    fs.readFile(process.argv[2], (err, data) => {
      if(err){console.log(err); return;}
      console.log('The file after adding the number:\n\n', data.toString());
    });
  });
});
