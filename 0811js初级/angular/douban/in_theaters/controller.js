/**
 * Created by dllo on 16/12/1.
 */
(function (angular, window) {
    "use strict";

    angular.module("douban.in_theaters", ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/in_theaters/:page", {
            templateUrl: "./in_theaters/view.html",
            controller: "in_theatersController"
        })
    }]).controller("in_theatersController", ['$scope','$http', "$routeParams", '$route', function ($scope, $http, $routeParams, $route) {
        console.log($routeParams.page);
        // $http.get("https://api.douban.com/v2/movie/in_theaters").success(function (data) {
        //     console.log(data);
        //     $scope.title = data.title;
        //     $scope.subjects = data.subjects;
        // })



        //显示加载动画
        $scope.showLoading=true;


        //每页数据的条数
        var perCount=5;
        //总共多少页
        $scope.totalPageCount=0;
        //当前页,根据url地址的参数设置; parseInt() 函数可解析一个字符串，并返回一个整数。
        $scope.currentPage=parseInt($routeParams.page);

        //翻页：前一个，下一页
        $scope.go=function (page) {
            $scope.currentPage=page;
            $route.updateParams({
               //前面的page是:page ;  后面的page是(page)
                page:page
            })

        };

        window.fn=function (data) {
            $scope.showLoading=false;
            // console.log(data);
            $scope.title = data.title;
            $scope.subjects = data.subjects;
            $scope.totalPageCount=Math.ceil(data.total/perCount);
        };

        //jsonp就是用来解决跨域的
        $http.jsonp("http://api.douban.com/v2/movie/in_theaters?callback=fn&start="+($scope.currentPage-1)*perCount+"&count="+perCount);
    }])

})(angular,window);


