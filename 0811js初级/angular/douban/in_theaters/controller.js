/**
 * Created by dllo on 16/12/1.
 */
(function (angular) {
    //启动严格模式
    "use strict";
    angular.module("douban.in_theaters",['ngRoute']).config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when("/in_theaters",{
                templateUrl:"./in_theaters/view.html"
            })
        }]
    )

})(angular);