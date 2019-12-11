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

  return {
    compact,
    flatten,
    chunk,
  }

} ()