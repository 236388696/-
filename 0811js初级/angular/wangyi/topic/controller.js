/**
 * Created by dllo on 16/12/2.
 */
/**
 * Created by dllo on 16/12/2.
 */
(function(angular,window){
    "use strict";
    angular.module("wangyi.topic",['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when("/topic",{
            templateUrl:'./topic/view.html',
            controller:"topicController"
        })
    }]).controller("topicController",['$scope','$http',function($scope,$http){
        $http.jsonp("http://localhost/0811/163api/api.php?callback=JSON_CALLBACK&type=topic").success(function (data) {
            $scope.topic = data.data;
        })
    }])
})(angular,window);