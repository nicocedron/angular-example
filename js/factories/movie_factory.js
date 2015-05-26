;(function(){

  MOVIES.factory('Movie', ['$q', '$http', movieFactory]);

  function movieFactory($q, $http){
    var factory = {};

    factory.all = function(){
      var response = $q.defer();

      $http.get('data/movies.json')
      .success(function(data){
          response.resolve(data);
      })
      .error(function(error){
        response.reject(error);
      });

      return response.promise;
    }


    factory.find = function(id){
      var response = $q.defer();

      $http.get('data/movie.json', {id: id})
      .success(function(data){
          response.resolve(data);
      })
      .error(function(error){
        response.reject(error);
      });

      return response.promise;
    }


    return factory;
  }

})();