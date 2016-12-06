/**
 * Created by dllo on 16/12/2.
 */
(function(angular){
    "use strict";
    angular.module("wangyi.news",['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when("/news",{
            templateUrl:'./news/view.html',
            controller:"newsController"
        })
    }]).controller("newsController",['$scope','$http',function($scope,$http){
        $http.jsonp("http://localhost/0811/163api/api.php?callback=JSON_CALLBACK&type=home").success(function (data) {
            $scope.webyi = data.tid[0].ads;
            $scope.currNews = data.tid;
        })
    }])
})(angular);

