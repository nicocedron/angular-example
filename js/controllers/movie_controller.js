;(function(){

  MOVIES.controller('MovieCtrl', ['$scope', '$route', '$routeParams', 'Movie',  MovieCtrl]);


  function MovieCtrl($scope, $route, $routeParams, Movie){
    var id = $routeParams.id;

    $scope.movie = {};

    Movie.find(id).then(function(resp){
      $scope.movie = resp;
    });

  }


})();