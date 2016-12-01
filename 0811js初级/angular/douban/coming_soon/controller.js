/**
 * Created by dllo on 16/12/1.
 */
(function (angular) {
    //启动严格模式
    "use strict";
    angular.module("douban.coming_soon",['ngRoute']).config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when("/coming_soon",{
                templateUrl:"./coming_soon/view.html"
            })
        }]
    )

})(angular);