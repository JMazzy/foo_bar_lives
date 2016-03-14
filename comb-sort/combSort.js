var combSort = function(array) {
  var gap = array.length;
  var shrink = 1.3;
  var swapped = true;

  while ( gap !== 1 || swapped !== false ) {
    gap = Math.floor( gap / shrink );
    if ( gap < 1 ) {
      gap = 1;
    }

    swapped = false;

    for ( var i = 0; i + gap < array.length; i++ ) {
      if ( array[i] > array[i+gap] ) {
        var temp = array[i];
        array[i] = array[i+gap];
        array[i+gap] = temp;
        swapped = true;
      }
    }
  }

  console.log(array);
  return array;
};
