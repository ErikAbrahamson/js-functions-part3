var code = require('../js/main.js');

describe('getStudentName', function() {
  it('returns name from object', function() {
    var name = {name: 'Michael', age: 27 };
    expect(code.getStudentName(name)).toEqual('Michael');
  });
});

describe('getTotalLetters', function() {
  it('returns total characters in a string array', function() {
  var stringArray = ['javascript', 'is', 'not', 'python'];
  expect(code.getTotalLetters(stringArray)).toEqual(21);
  });
});

// describe('getVowels', function() {
//   it('returns all vowels in a string', function() {
//     expect(code.getVowels('aeioux')).toEqual('aeiou');
//   });
// });
