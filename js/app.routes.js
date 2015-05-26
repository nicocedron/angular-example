function route(_route){
  return 'templates/'+_route+'.html';
}

MOVIES.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: route('movies_list'),
    controller: 'MoviesListCtrl',
    resolve: {
      moviesList: function(Movie){
        return Movie.all();
      }
    }
  })
  .when('/movie/:id', {
    templateUrl: route('movie'),
    controller: 'MovieCtrl',
  })
  ;

});