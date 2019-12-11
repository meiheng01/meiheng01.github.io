var meiheng01 = function() {

  function compact(ary) {
    return ary.filter(it => it);
  }

  function flatten(ary) {
    var result = [];
    for (var i = 0; i < ary.length; i++) {
      if (!ary[i].length) {
        result.push(ary[i])
      } else {
        for (var j = 0; j < ary[i].length; j++) {
          result.push(ary[i][j])
        }
      }
    }
    return result;
  }

  function chunk(ary, size) {
    var result = [];
    while(ary.length) {
      result.push(ary.splice(0,size))
    }
    return result;
  }

  function join(array, separator = ','){
    return array.reduce((result, curr) => result + '' + separator + curr)
  }

  function drop(array, n = 1) {
    var arr = array;
    for (var i = 0; i < n; i++) {
      arr.shift()
    }
    return arr;
  }

  function indexOf(array, value, fromIndex=0){
    while (fromIndex < array.length) {
      if(isNaN(value)&&isNaN(array[fromIndex])){
        return fromIndex;
      }
      if(array[fromIndex] == value) {
        return fromIndex;
      }
      fromIndex++;
    }
    return -1;
  }

  return {
    compact,
    flatten,
    chunk,
    join,
    drop,
    indexOf,

  }

} ()