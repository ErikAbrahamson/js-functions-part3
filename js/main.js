
  module.exports = {
    getStudentName: function(obj) {
      return obj.name;
    },
    getTotalLetters: function(strings) {
      return (strings.join().replace(/,/g, '')).length;
      }
    };
    // createObject: createObject,
    // getNegativeIndex: getNegativeIndex,
    // removeCharacter: removeCharacter,
    // outputObject: outputObject,
    // getVowels: getVowels,
    // captureTwins: captureTwins,
    // testBooleanLogic: testBooleanLogic,
    // getUniqueValues: getUniqueValues
