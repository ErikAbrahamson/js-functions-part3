
  module.exports = {
    getStudentName: function(obj) {
      return obj.name;
    },
    getTotalLetters: function(strings) {
      return (strings.join().replace(/,/g, '')).length;
    },
    createObject: function(city,value) {
      var City = function(city,value) {
        this.city = value;
      };
      return new City(city,value);
    },
    getNegativeIndex: function(arr, negIndex) {
      negIndex = Math.abs(negIndex);
      negIndex = arr.length - negIndex;
      return arr[negIndex];
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
