String.prototype.toJadenCase = function () {
    //...we split the array into words, then remove the first character by slicing and then join the words together
    return this.split(' ')
     .map((x)=>
     x[0].toUpperCase() + x.slice(1)).join(' ');
  };
  