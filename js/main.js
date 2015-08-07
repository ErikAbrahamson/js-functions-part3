
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
      for (var kv in Obj) {
        x.push(kv + ' is ' + Obj[kv]);
      }
      return x.toString().replace(/,/g, ', ');
    },
    getVowels: function(string) {
      var newString = [];
      var vowels = ['a','e','i','o','u'];
      var i, j = 0;
      for (i; i < string.length, j < vowels.length; i++, j++) {
        if (string.indexOf(vowels[j]) !== -1) {
          newString.push(string[j]);
        }
      }
      return newString;
    },
    captureTwins: function(string) {
      for (var i = 0; i < string.length; i+=2) {
        if (string[i + 2] !== string[i + 1]) {
          return true;
        } else {
          return false;
        }
      }
    }
};
    // testBooleanLogic: testBooleanLogic,
    // getUniqueValues: getUniqueValues
