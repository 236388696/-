/**
 * Created by dllo on 16/12/1.
 */
(function (angular) {
    "use strict";
    //把三个子模块组装起来
   var app = angular.module("douban",['douban.in_theaters','douban.coming_soon','douban.top250']);
    //         app.controller ("myController",['$scope','$http',function ($scope,$http) {
    //             //就是ajax
    //             $http.get("data.json").success(function(data){
    //
    //                 $scope.list = data.subjects;
    //
    //             });
    // }]);
})(angular);




