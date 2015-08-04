
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
    },
    removeCharacter: function(str, char) {
      var x = new RegExp(char, 'g');
      for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
          str = str.replace(x, '');
        }
      }
      return str;
    },
    outputObject: function(Obj) {
      var x = [];
      for (var i = 0; i < keys(Obj).length; i++) {
        x.push(keys(Obj)[i] + ' is ' + values(Obj)[i]);
      }
      return x.toString().replace(',',', ');
    }
  };
    // outputObject: outputObject,
    // getVowels: getVowels,
    // captureTwins: captureTwins,
    // testBooleanLogic: testBooleanLogic,
    // getUniqueValues: getUniqueValues
