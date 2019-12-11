var meiheng01 = function() {

  function compact(ary) {
    return ary.filter(it => it);
  }

  function flatten() {

  }

  function chunk(ary, size) {
    var result = [];
    while(ary.length) {
      result.push(ary.slice(0,size))
    }
    return result;
  }

  return {
    compact,
    flatten,
    chunk,
  }

} ()