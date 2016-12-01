/**
 * Created by dllo on 16/12/1.
 */
(function (angular) {
    //启动严格模式
    "use strict";
    angular.module("douban.top250",['ngRoute']).config(['$routeProvider',function ($routeProvider) {
           //路由
            $routeProvider.when("/top250",{
                //模版
                templateUrl:"./top250/view.html"
            })
        }]
    )

})(angular);