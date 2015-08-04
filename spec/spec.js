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

describe('removeCharacter', function() {
  it('takes a string and char as arguments and returns the string with char(s) removed', function() {
    expect(code.removeCharacter('javascript', 'a')).toEqual('jvscript');
  });
});

describe('outputObject', function() {
  it('takes in an object and returns key value pairs in string format', function() {
    var ages = {john: 10, jerry: 11, jenny: 12 };
    expect(code.outputObject(ages)).toMatch('john is 10, jerry is 11, jenny is 12');
  });
});
// describe('getVowels', function() {
//   it('returns all vowels in a string', function() {
//     expect(code.getVowels('aeioux')).toEqual('aeiou');
//   });
// });
