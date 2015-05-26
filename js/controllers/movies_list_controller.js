;(function(){

  MOVIES.controller('MoviesListCtrl', ['$scope', '$route',  moviesCtrl]);


  function moviesCtrl($scope, $route){
    $scope.movies = $route.current.locals.moviesList;

  }


})();