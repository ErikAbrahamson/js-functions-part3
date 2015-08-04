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

describe('createObject', function() {
  it('takes two args, returns new Obj with key of first arg and val of second', function() {
    expect(code.createObject('city','Boulder')).toBeTruthy();
  });
});

describe('getNegativeIndex', function() {
  it('takes an array and negative number as args, returns val from array at given neg index', function() {
    var letterArray = ['a', 'b', 'c', 'd', 'e'];
    expect(code.getNegativeIndex(letterArray, -3)).toEqual('c');
  });
});

// describe('getVowels', function() {
//   it('returns all vowels in a string', function() {
//     expect(code.getVowels('aeioux')).toEqual('aeiou');
//   });
// });
