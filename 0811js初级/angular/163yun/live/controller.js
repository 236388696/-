/**
 * Created by dllo on 16/12/5.
 */
(function(angular){
    "use strict";
    angular.module("yun.live",['ngRoute']).config(['$routeProvider',function($routeProvider){
        $routeProvider.when("/live",{
            templateUrl:'./live/view.html',
            controller:"liveController"
        })
    }]).controller("liveController",['$scope','$http',function ($scope,$http) {
        $http.jsonp("http://localhost/0811/163api/api.php?callback=JSON_CALLBACK&type=live").success(function (data) {
            $scope.live = data.live_review;
        })
    }])
})(angular);