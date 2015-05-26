MOVIES.filter('money', function() {
  return function(input, presicion) {
    if(!presicion) presicion = 2;

    return parseFloat(input).toFixed(presicion);
  };
});