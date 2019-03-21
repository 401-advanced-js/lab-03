'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promises.js');

describe('File Reader module promises version', () => {

  xit('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    let err = '';
    return reader(files, (err,[]))
      .then(results => {
        expect(err).toBeDefined();
      })
      .catch(err => console.log(err));
  });


  xit('reads 3 files', () => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    let err = '';
    return reader(files, (err,data)
      .then((results) => {
        expect(results).toBeNull();
        expect(data instanceof Array ).toBeTruthy();
        expect(data.length ).toBe(3);
      })
      
    );
  });

});
