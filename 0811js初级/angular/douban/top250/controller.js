/**
 * Created by dllo on 16/12/1.
 */
(function (angular) {
    "use strict";
    angular.module("douban.top250",['ngRoute']).config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when("/top250",{
            templateUrl:"./top250/view.html"
        })
    }])
})(angular);
